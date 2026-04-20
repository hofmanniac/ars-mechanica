---
layout: default
title: All Mechanics
permalink: /mechanics/
---

<div class="all-mechanics-page">
    <header class="page-header">
        <h1>All Game Mechanics</h1>
        <p>Browse the complete catalog of game mechanics. Use search to find specific mechanics, or filter by category or complexity.</p>
    </header>
    
    <div class="filter-controls">
        <div class="filter-group">
            <label for="complexity-filter">Complexity:</label>
            <select id="complexity-filter">
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label for="category-filter">Category:</label>
            <select id="category-filter">
                <option value="all">All Categories</option>
                {% for cat_item in site.data.categories %}
                    {% assign cat_key = cat_item[0] %}
                    {% assign cat_data = cat_item[1] %}
                    <option value="{{ cat_key }}">{{ cat_data.name }}</option>
                {% endfor %}
            </select>
        </div>
        
        <button id="reset-filters" class="button-secondary">Reset Filters</button>
    </div>
    
    <div class="mechanics-count">
        <p>Showing <span id="visible-count">{{ site.mechanics.size }}</span> of {{ site.mechanics.size }} mechanics</p>
    </div>
    
    <div class="mechanics-grid" id="mechanics-grid">
        {% assign sorted_mechanics = site.mechanics | sort: "title" %}
        {% for mechanic in sorted_mechanics %}
            <div class="mechanic-item" 
                 data-complexity="{{ mechanic.complexity }}" 
                 data-categories="{{ mechanic.categories | join: ',' }}">
                {% include mechanic_card.html mechanic=mechanic %}
            </div>
        {% endfor %}
    </div>
</div>

<style>
.filter-controls {
    display: flex;
    gap: 1.5rem;
    margin: 2rem 0;
    flex-wrap: wrap;
    align-items: end;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-weight: 600;
    font-size: 0.9rem;
}

.filter-group select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    background-color: white;
}

.button-secondary {
    padding: 0.5rem 1.5rem;
    background-color: var(--background-alt);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
}

.button-secondary:hover {
    background-color: var(--border-color);
}

.mechanics-count {
    margin: 1rem 0;
    color: var(--text-light);
}

.mechanic-item {
    transition: var(--transition);
}

.mechanic-item.hidden {
    display: none;
}
</style>

<script>
(function() {
    const complexityFilter = document.getElementById('complexity-filter');
    const categoryFilter = document.getElementById('category-filter');
    const resetButton = document.getElementById('reset-filters');
    const mechanicItems = document.querySelectorAll('.mechanic-item');
    const visibleCount = document.getElementById('visible-count');
    const totalCount = mechanicItems.length;
    
    function filterMechanics() {
        const selectedComplexity = complexityFilter.value;
        const selectedCategory = categoryFilter.value;
        let visible = 0;
        
        mechanicItems.forEach(item => {
            const itemComplexity = item.dataset.complexity;
            const itemCategories = item.dataset.categories.split(',');
            
            let showItem = true;
            
            // Filter by complexity
            if (selectedComplexity !== 'all' && itemComplexity !== selectedComplexity) {
                showItem = false;
            }
            
            // Filter by category
            if (selectedCategory !== 'all' && !itemCategories.includes(selectedCategory)) {
                showItem = false;
            }
            
            if (showItem) {
                item.classList.remove('hidden');
                visible++;
            } else {
                item.classList.add('hidden');
            }
        });
        
        visibleCount.textContent = visible;
    }
    
    function resetFilters() {
        complexityFilter.value = 'all';
        categoryFilter.value = 'all';
        filterMechanics();
    }
    
    complexityFilter.addEventListener('change', filterMechanics);
    categoryFilter.addEventListener('change', filterMechanics);
    resetButton.addEventListener('click', resetFilters);
})();
</script>
