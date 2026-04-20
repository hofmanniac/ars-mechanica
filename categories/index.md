---
layout: default
title: Categories
permalink: /categories/
---

<div class="categories-page">
    <header class="page-header">
        <h1>Mechanic Categories</h1>
        <p>Game mechanics organized by category. Each category represents a different aspect of game design.</p>
    </header>
    
    <div class="categories-list">
        {% assign top_level_cats = site.data.categories | where_exp: "item", "item[1].parent == nil" %}
        
        {% for cat_item in site.data.categories %}
            {% assign cat_key = cat_item[0] %}
            {% assign cat_data = cat_item[1] %}
            
            {% unless cat_data.parent %}
            <div class="category-section">
                <h2><a href="{{ '/categories/' | append: cat_key | relative_url }}">{{ cat_data.name }}</a></h2>
                <p class="category-description">{{ cat_data.description }}</p>
                
                {% assign count = site.mechanics | where_exp: "item", "item.categories contains cat_key" | size %}
                <p class="mechanic-count">{{ count }} mechanic{% if count != 1 %}s{% endif %}</p>
                
                {% comment %}Show subcategories{% endcomment %}
                {% assign subcats = site.data.categories | where_exp: "item", "item[1].parent == cat_key" %}
                {% if subcats.size > 0 %}
                <div class="subcategories">
                    <h4>Subcategories:</h4>
                    <ul>
                    {% for subcat_item in subcats %}
                        {% assign subcat_key = subcat_item[0] %}
                        {% assign subcat_data = subcat_item[1] %}
                        <li>
                            <a href="{{ '/categories/' | append: subcat_key | relative_url }}">{{ subcat_data.name }}</a>
                            <span class="subcat-description">— {{ subcat_data.description }}</span>
                        </li>
                    {% endfor %}
                    </ul>
                </div>
                {% endif %}
                
                {% comment %}Show a few mechanics from this category{% endcomment %}
                {% assign cat_mechanics = site.mechanics | where_exp: "item", "item.categories contains cat_key" | sort: "title" | limit: 3 %}
                {% if cat_mechanics.size > 0 %}
                <div class="category-preview-mechanics">
                    <h4>Featured mechanics:</h4>
                    <ul>
                    {% for mechanic in cat_mechanics %}
                        <li><a href="{{ mechanic.url | relative_url }}">{{ mechanic.title }}</a></li>
                    {% endfor %}
                    </ul>
                    {% if count > 3 %}
                    <a href="{{ '/categories/' | append: cat_key | relative_url }}" class="view-all-link">View all {{ count }} mechanics →</a>
                    {% endif %}
                </div>
                {% endif %}
            </div>
            {% endunless %}
        {% endfor %}
    </div>
</div>

<style>
.category-section {
    margin: 3rem 0;
    padding: 2rem;
    background-color: var(--background-alt);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--primary-color);
}

.category-section h2 {
    margin-top: 0;
}

.category-section h2 a {
    color: var(--primary-color);
}

.category-description {
    color: var(--text-light);
    font-size: 1.05rem;
    margin: 1rem 0;
}

.mechanic-count {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 1rem;
    font-size: 0.85rem;
    font-weight: 600;
}

.subcategories {
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: white;
    border-radius: var(--border-radius);
}

.subcategories h4 {
    margin-top: 0;
    font-size: 1rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.subcategories ul {
    list-style: none;
    padding: 0;
}

.subcategories li {
    margin: 0.5rem 0;
}

.subcat-description {
    color: var(--text-light);
    font-size: 0.9rem;
}

.category-preview-mechanics {
    margin-top: 1.5rem;
}

.category-preview-mechanics h4 {
    font-size: 1rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.category-preview-mechanics ul {
    margin: 0.5rem 0;
}

.view-all-link {
    font-weight: 600;
    color: var(--primary-color);
}
</style>
