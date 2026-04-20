---
layout: default
title: Home
---

<div class="home-page">
    <section class="hero">
        <h1>Welcome to Ars Mechanica</h1>
        <p class="lead">
            A comprehensive encyclopedia of game mechanics for tabletop RPGs, board games, 
            and card games. Discover, explore, and mix mechanics to create amazing games.
        </p>
    </section>

    <section class="featured-mechanics">
        <h2>Featured Mechanics</h2>
        <div class="mechanics-grid">
            {% assign featured = site.mechanics | sort: "title" | limit: 6 %}
            {% for mechanic in featured %}
                {% include mechanic_card.html mechanic=mechanic %}
            {% endfor %}
        </div>
        <p style="text-align: center; margin-top: 2rem;">
            <a href="{{ '/mechanics/' | relative_url }}" class="button">Browse All Mechanics →</a>
        </p>
    </section>

    <section class="categories-preview">
        <h2>Browse by Category</h2>
        <div class="category-grid">
            {% for cat_item in site.data.categories limit: 10 %}
                {% assign cat_key = cat_item[0] %}
                {% assign cat_data = cat_item[1] %}
                {% unless cat_data.parent %}
                <div class="category-preview-card">
                    <h3><a href="{{ '/categories/' | append: cat_key | relative_url }}">{{ cat_data.name }}</a></h3>
                    <p>{{ cat_data.description }}</p>
                    {% assign count = site.mechanics | where_exp: "item", "item.categories contains cat_key" | size %}
                    <span class="mechanic-count">{{ count }} mechanic{% if count != 1 %}s{% endif %}</span>
                </div>
                {% endunless %}
            {% endfor %}
        </div>
        <p style="text-align: center; margin-top: 2rem;">
            <a href="{{ '/categories/' | relative_url }}" class="button">View All Categories →</a>
        </p>
    </section>

    <section class="about-preview">
        <h2>What is Ars Mechanica?</h2>
        <p>
            Ars Mechanica is an encyclopedia and reference guide for game mechanics. Whether you're 
            designing a new board game, homebrewing an RPG, or just curious about how games work, 
            you'll find detailed explanations, examples, and insights about the building blocks 
            that make games engaging.
        </p>
        <p>
            Each mechanic entry includes:
        </p>
        <ul>
            <li><strong>How it works</strong> - Clear explanations of the mechanic</li>
            <li><strong>Examples</strong> - Real games that use this mechanic</li>
            <li><strong>Strategic depth</strong> - What makes it interesting</li>
            <li><strong>Design considerations</strong> - Tips for implementation</li>
            <li><strong>Combinations</strong> - How it works with other mechanics</li>
        </ul>
        <p>
            <a href="{{ '/about/' | relative_url }}">Learn more about Ars Mechanica →</a>
        </p>
    </section>
</div>

<style>
.hero {
    text-align: center;
    padding: 3rem 1.5rem;
    background: linear-gradient(135deg, #2c5aa0 0%, #5a8fd6 100%);
    color: white;
    margin: 0 -1.5rem 3rem;
    border-radius: 0.375rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
}

.lead {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.95;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.category-preview-card {
    padding: 1.5rem;
    background-color: var(--background-alt);
    border-left: 4px solid var(--primary-color);
    border-radius: var(--border-radius);
}

.category-preview-card h3 {
    margin-top: 0;
}

.category-preview-card p {
    color: var(--text-light);
    font-size: 0.95rem;
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

.button {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
}

.button:hover {
    background-color: var(--secondary-color);
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

section {
    margin: 3rem 0;
}

.about-preview ul {
    margin: 1rem 0 1rem 2rem;
}

.about-preview li {
    margin-bottom: 0.5rem;
}
</style>
