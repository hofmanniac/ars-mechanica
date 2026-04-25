/**
 * Tabs functionality for mechanic pages
 * Handles switching between Mechanic Details and Combinations tabs
 */

(function() {
    'use strict';
    
    function init() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        if (tabButtons.length === 0) return; // Not on a page with tabs
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
        
        // Handle deep linking to combinations tab via URL hash
        if (window.location.hash === '#combinations') {
            const combinationsButton = document.querySelector('[data-tab="combinations"]');
            if (combinationsButton) {
                combinationsButton.click();
            }
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
