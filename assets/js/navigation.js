/**
 * Navigation Enhancements
 * - Back to top button with fade-in/out
 * - Smooth scrolling behavior
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        showButtonAfter: 500, // Show button after scrolling this many pixels
        scrollDuration: 600,
        buttonFadeClass: 'visible'
    };
    
    /**
     * Create and inject the back-to-top button
     */
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.id = 'back-to-top';
        button.className = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        button.setAttribute('title', 'Back to top');
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
        `;
        
        document.body.appendChild(button);
        return button;
    }
    
    /**
     * Handle back to top button click
     */
    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    /**
     * Show or hide back-to-top button based on scroll position
     */
    function toggleBackToTopButton(button) {
        if (window.scrollY > CONFIG.showButtonAfter) {
            button.classList.add(CONFIG.buttonFadeClass);
        } else {
            button.classList.remove(CONFIG.buttonFadeClass);
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
     * Initialize navigation enhancements
     */
    function init() {
        // Create back to top button
        const backToTopButton = createBackToTopButton();
        
        // Handle button click
        backToTopButton.addEventListener('click', scrollToTop);
        
        // Handle scroll events with throttling
        const handleScroll = throttle(() => {
            toggleBackToTopButton(backToTopButton);
        }, 100);
        
        window.addEventListener('scroll', handleScroll);
        
        // Set initial state
        toggleBackToTopButton(backToTopButton);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
