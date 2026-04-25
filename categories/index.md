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
