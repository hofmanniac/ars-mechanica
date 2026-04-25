---
layout: default
title: Game Design Dimensions
permalink: /dimensions/
---

<div class="dimensions-page">
    <header class="page-header">
        <h1>Game Design Dimensions</h1>
        <p>A framework for understanding the fundamental aspects of game design. Each dimension represents a core challenge that game mechanics address. By understanding these dimensions, you can make more intentional design choices and discover powerful mechanic combinations.</p>
    </header>

    <div class="dimensions-list">
        {% if site.dimensions and site.dimensions.size > 0 %}
        {% assign sorted_dimensions = site.dimensions | sort: "order" %}
        {% for dimension in sorted_dimensions %}
        <div class="dimension-card">
            <div class="dimension-card-header">
                <h2>
                    <a href="{{ dimension.url | relative_url }}">
                        <i class="fas {{ dimension.icon }}"></i> {{ dimension.title }}
                    </a>
                </h2>
            </div>
            <p class="dimension-card-description">{{ dimension.description }}</p>
            
            {% assign mechanic_count = site.mechanics | where_exp: "item", "item.dimensions contains dimension.slug" | size %}
            <div class="dimension-card-meta">
                <span class="mechanic-count">{{ mechanic_count }} mechanic{% if mechanic_count != 1 %}s{% endif %}</span>
            </div>
            
            <a href="{{ dimension.url | relative_url }}" class="dimension-card-link">Explore this dimension →</a>
        </div>
        {% endfor %}
        {% else %}
        <p>Dimensions are being set up. Check back soon!</p>
        {% endif %}
    </div>

    <section class="dimensions-explainer">
        <h2>What Are Game Design Dimensions?</h2>
        <p>Dimensions are the fundamental aspects or layers of game design. Every game is built from mechanics that address various dimensions:</p>
        
        <ul>
            <li><strong>Action Selection</strong> - How players decide what to do</li>
            <li><strong>Resource Economy</strong> - What players acquire and spend</li>
            <li><strong>Spatial & Positional</strong> - Where things happen and how position matters</li>
            <li><em>...and more coming soon</em></li>
        </ul>

        <p>Understanding dimensions helps you:</p>
        <ul>
            <li>Identify which aspects of gameplay your game addresses</li>
            <li>Discover gaps that might need filling</li>
            <li>Find interesting mechanic combinations across dimensions</li>
            <li>Learn design patterns and common pitfalls for each dimension</li>
        </ul>

        <h3>Using This Framework</h3>
        <p>When designing a game:</p>
        <ol>
            <li><strong>Identify your dimensions</strong> - Which aspects does your game need to address?</li>
            <li><strong>Choose mechanics</strong> - Pick mechanics that implement each dimension</li>
            <li><strong>Explore intersections</strong> - Look for synergies between dimensional combinations</li>
            <li><strong>Check for gaps</strong> - Are there dimensions you're neglecting?</li>
        </ol>

        <p>Browse the dimensions above to explore mechanics, patterns, and design considerations for each aspect of game design.</p>
    </section>
</div>
