/**
 * Table of Contents Generator with Scroll Spy
 * Automatically generates a TOC from H2 and H3 headings in the main content
 * and highlights the current section as the user scrolls
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        contentSelector: '.mechanic-content',
        tocContainerSelector: '#toc-container',
        headingSelectors: 'h2, h3',
        tocActiveClass: 'toc-active',
        scrollOffset: 100, // Offset for determining active section
        smoothScrollDuration: 500
    };
    
    // State
    let headings = [];
    let tocLinks = [];
    let isScrolling = false;
    
    /**
     * Generate a URL-safe slug from heading text
     */
    function slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
    
    /**
     * Add IDs to all headings that don't have them
     */
    function addHeadingIds(contentElement) {
        const headingElements = contentElement.querySelectorAll(CONFIG.headingSelectors);
        
        headingElements.forEach(heading => {
            if (!heading.id) {
                heading.id = slugify(heading.textContent);
            }
            headings.push({
                element: heading,
                id: heading.id,
                level: parseInt(heading.tagName.charAt(1)),
                text: heading.textContent,
                top: 0 // Will be calculated later
            });
        });
    }
    
    /**
     * Generate the TOC HTML structure
     */
    function generateTocHTML() {
        if (headings.length === 0) return '';
        
        let html = '<nav class="toc-nav" role="navigation" aria-label="Table of Contents">';
        html += '<ul class="toc-list">';
        
        let currentLevel = 2;
        let openSublist = false;
        
        headings.forEach((heading, index) => {
            const isActive = index === 0 ? ' class="toc-active"' : '';
            
            // Close sublists when going back to H2
            if (heading.level === 2 && openSublist) {
                html += '</ul></li>';
                openSublist = false;
            }
            
            if (heading.level === 2) {
                html += `<li><a href="#${heading.id}" class="toc-link"${isActive} data-heading-id="${heading.id}">${heading.text}</a>`;
                currentLevel = 2;
            } else if (heading.level === 3) {
                // Open sublist if not already open
                if (!openSublist) {
                    html += '<ul class="toc-sublist">';
                    openSublist = true;
                }
                html += `<li><a href="#${heading.id}" class="toc-link" data-heading-id="${heading.id}">${heading.text}</a></li>`;
            }
        });
        
        // Close any open sublists
        if (openSublist) {
            html += '</ul></li>';
        }
        
        html += '</ul></nav>';
        return html;
    }
    
    /**
     * Calculate heading positions for scroll spy
     */
    function calculateHeadingPositions() {
        headings.forEach(heading => {
            heading.top = heading.element.getBoundingClientRect().top + window.scrollY;
        });
    }
    
    /**
     * Determine which heading is currently active based on scroll position
     */
    function getActiveHeading() {
        const scrollPosition = window.scrollY + CONFIG.scrollOffset;
        
        // Find the last heading that is above the scroll position
        for (let i = headings.length - 1; i >= 0; i--) {
            if (scrollPosition >= headings[i].top) {
                return headings[i].id;
            }
        }
        
        // Default to first heading if at top of page
        return headings.length > 0 ? headings[0].id : null;
    }
    
    /**
     * Update TOC active states based on current scroll position
     */
    function updateActiveStates() {
        const activeId = getActiveHeading();
        
        if (!activeId) return;
        
        // Remove all active classes
        tocLinks.forEach(link => {
            link.classList.remove(CONFIG.tocActiveClass);
        });
        
        // Add active class to current heading
        const activeLink = document.querySelector(`[data-heading-id="${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add(CONFIG.tocActiveClass);
        }
    }
    
    /**
     * Handle smooth scrolling when TOC links are clicked
     */
    function handleTocClick(event) {
        const link = event.target.closest('.toc-link');
        if (!link) return;
        
        event.preventDefault();
        const targetId = link.getAttribute('data-heading-id');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            isScrolling = true;
            
            // Smooth scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL hash without jumping
            history.pushState(null, null, `#${targetId}`);
            
            // Reset scrolling flag after animation
            setTimeout(() => {
                isScrolling = false;
                updateActiveStates();
            }, CONFIG.smoothScrollDuration);
        }
    }
    
    /**
     * Throttle function to limit how often scroll handler runs
     */
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Handle scroll events with throttling
     */
    const handleScroll = throttle(() => {
        if (!isScrolling) {
            calculateHeadingPositions();
            updateActiveStates();
        }
    }, 100);
    
    /**
     * Initialize the TOC
     */
    function init() {
        const contentElement = document.querySelector(CONFIG.contentSelector);
        const tocContainer = document.querySelector(CONFIG.tocContainerSelector);
        
        if (!contentElement || !tocContainer) {
            return; // Not on a mechanic page
        }
        
        // Add IDs to headings
        addHeadingIds(contentElement);
        
        if (headings.length === 0) {
            tocContainer.style.display = 'none';
            return;
        }
        
        // Get mechanic title from header
        const mechanicTitle = document.querySelector('.mechanic-header')?.getAttribute('data-mechanic-title') || '';
        
        // Generate and insert TOC
        tocContainer.innerHTML = `
            <h2 class="toc-title">${mechanicTitle}</h2>
            <h3 class="toc-heading">On This Page</h3>
            ${generateTocHTML()}
        `;
        
        // Cache TOC links
        tocLinks = Array.from(document.querySelectorAll('.toc-link'));
        
        // Calculate initial positions
        calculateHeadingPositions();
        
        // Set initial active state
        updateActiveStates();
        
        // Handle TOC clicks
        tocContainer.addEventListener('click', handleTocClick);
        
        // Handle scroll events
        window.addEventListener('scroll', handleScroll);
        
        // Recalculate positions on window resize
        window.addEventListener('resize', throttle(calculateHeadingPositions, 250));
        
        // Handle direct hash links on page load
        if (window.location.hash) {
            setTimeout(() => {
                const targetElement = document.querySelector(window.location.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
