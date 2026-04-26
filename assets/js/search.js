---
layout: null
---
// Simple search implementation for Ars Mechanica
// Uses fetch to load search.json and filters results client-side

(function() {
    'use strict';
    
    let searchData = [];
    let searchInput = document.getElementById('search-input');
    let searchResults = document.getElementById('search-results');
    
    // Load search data
    fetch('{{ "/search.json" | relative_url }}')
        .then(response => response.json())
        .then(data => {
            searchData = data;
        })
        .catch(error => console.error('Error loading search data:', error));
    
    // Search function
    function performSearch(query) {
        if (!query || query.trim().length < 2) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('active');
            return;
        }
        
        query = query.toLowerCase().trim();
        
        let results = searchData.filter(item => {
            // Search in title
            if (item.title.toLowerCase().includes(query)) return true;
            
            // Search in content
            if (item.content && item.content.toLowerCase().includes(query)) return true;
            
            // Search in tags
            if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) return true;
            
            // Search in categories
            if (item.categories && item.categories.some(cat => cat.toLowerCase().includes(query))) return true;
            
            // Search in aliases
            if (item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(query))) return true;
            
            return false;
        });
        
        displayResults(results, query);
    }
    
    // Display search results
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No mechanics found matching "' + query + '"</div>';
            searchResults.classList.add('active');
            return;
        }
        
        let html = '<ul>';
        results.slice(0, 10).forEach(result => {
            html += '<li class="search-result-item">';
            html += '<a href="' + result.url + '">';
            html += '<strong>' + result.title + '</strong>';
            
            if (result.complexity) {
                html += ' <span class="complexity-badge">' + result.complexity + '</span>';
            }
            
            if (result.content) {
                html += '<p>' + result.content.substring(0, 100) + '...</p>';
            }
            
            html += '</a>';
            html += '</li>';
        });
        html += '</ul>';
        
        if (results.length > 10) {
            html += '<div class="more-results">Showing 10 of ' + results.length + ' results</div>';
        }
        
        searchResults.innerHTML = html;
        searchResults.classList.add('active');
    }
    
    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            performSearch(e.target.value);
        });
        
        searchInput.addEventListener('focus', function(e) {
            if (e.target.value.trim().length >= 2) {
                performSearch(e.target.value);
            }
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }
})();
