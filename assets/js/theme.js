/**
 * Theme Toggle System
 * Handles dark/light theme switching with localStorage persistence
 */

(function() {
    'use strict';
    
    const STORAGE_KEY = 'ars-mechanica-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    
    /**
     * Get the current theme from localStorage or system preference
     */
    function getPreferredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return stored;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return THEME_LIGHT;
        }
        
        // Default to dark theme
        return THEME_DARK;
    }
    
    /**
     * Apply theme to the document
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        
        // Update icon
        const icon = document.getElementById('theme-icon');
        if (icon) {
            if (theme === THEME_DARK) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
    
    /**
     * Toggle between light and dark theme
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        applyTheme(newTheme);
    }
    
    /**
     * Initialize theme system
     */
    function init() {
        // Apply saved or preferred theme immediately (before page renders)
        const theme = getPreferredTheme();
        applyTheme(theme);
        
        // Set up toggle button click handler
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only update if user hasn't manually set a preference
                if (!localStorage.getItem(STORAGE_KEY)) {
                    applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
                }
            });
        }
    }
    
    // Run initialization as early as possible to prevent flash
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also apply theme immediately on script load to prevent flash
    const theme = getPreferredTheme();
    document.documentElement.setAttribute('data-theme', theme);
})();
