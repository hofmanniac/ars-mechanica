# Ars Mechanica Author Guide

A concise guide for contributing content to the Ars Mechanica game design reference site.

## Content Types Overview

Ars Mechanica organizes game design knowledge into four main content types:

1. **Game Mechanics** — Specific implementations of gameplay systems
2. **Dimensions** — High-level design aspects that group related mechanics
3. **Combinations** — Synergies created when multiple mechanics work together
4. **Categories** — Taxonomy tags for organizing mechanics by theme

## 1. Game Mechanics

**Location:** `_mechanics/`  
**Filename:** `kebab-case-name.md` (e.g., `worker-placement.md`)  
**URL:** `/mechanics/kebab-case-name/`

### Required Frontmatter

```yaml
---
title: "Display Title"
slug: kebab-case-name
icon: "fa-icon-name"  # Font Awesome 6 icon
---
```

### Optional Frontmatter

```yaml
dimensions:              # Links to dimension pages
  - dimension-slug
  - another-dimension
  
categories:              # Taxonomy tags
  - resource-management
  - action-selection
  
aliases:                 # Alternative names
  - "Alternative Name"
  - "Another Name"
  
tags:                    # Searchable keywords
  - tactical
  - optimization
  
complexity: medium       # low, medium, high
  
game_types:              # Where this appears
  - board-game
  - tabletop-rpg
  
related_mechanics:       # Manual cross-references
  - other-mechanic-slug
  
examples:                # Real games using this
  - name: "Game Name"
    description: "How it uses this mechanic"
```

### Content Structure

Use H2 (`##`) headings for main sections. Common sections include:

- **What It Is** — Core concept explanation
- **How It Works** — Step-by-step implementation
- **Why Use It** — Design benefits and goals
- **Design Considerations** — Balance, pitfalls, tips
- **Variations** — Common adaptations
- **Examples** — Real-world implementations

### Automatic Linking

- Mechanic pages automatically show related **Dimensions** (from `dimensions:` frontmatter)
- Mechanic pages automatically show related **Combinations** (queried from combinations collection)
- Use `related_mechanics:` for manual cross-references between mechanics

---

## 2. Dimensions

**Location:** `_dimensions/`  
**Filename:** `kebab-case-name.md` (e.g., `action-selection.md`)  
**URL:** `/dimensions/kebab-case-name/`

### Required Frontmatter

```yaml
---
title: "Display Title"
slug: kebab-case-name
icon: "fa-icon-name"
description: "One-sentence summary"
order: 1  # Display order on dimensions index
---
```

### Optional Frontmatter

None required — dimensions are high-level design concepts.

### Content Structure

Recommended sections:

- **What This Dimension Represents** — Core concept and scope
- **Common Mechanics** — List mechanics that address this dimension (with brief descriptions)
- **Design Questions** — Key considerations when designing for this dimension
- **Examples** — How different games approach this dimension

### Automatic Linking

- Dimension pages automatically show related **Mechanics** (mechanics with this dimension in their `dimensions:` frontmatter)
- Dimension pages automatically show related **Combinations** (combinations with `related_dimensions:` containing this dimension)

---

## 3. Combinations

**Location:** `_combinations/`  
**Filename:** `mechanic1-mechanic2.md` (e.g., `deck-building-worker-placement.md`)  
**URL:** `/combinations/mechanic1-mechanic2/`

### Required Frontmatter

```yaml
---
title: "Display Title"
mechanics: [mechanic1-slug, mechanic2-slug]  # Array of mechanic slugs
description: "One-sentence summary of the synergy"
---
```

### Optional Frontmatter

```yaml
game_examples:           # Real games using this combo
  - "Game Name"
  - "Another Game"
  
design_notes: ""         # Reserved for future use
  
related_dimensions:      # Dimensions this combo relates to
  - dimension-slug
```

### Content Structure

**Use H2 (`##`) headings** for proper table of contents generation. Recommended sections:

- **Overview** — Quick concept explanation
- **How It Works** — Step-by-step mechanics interaction with bullet lists
- **Why It Works** — Strategic appeal and engagement factors
- **Design Considerations** — Practical tips, balance points, common pitfalls
- **Examples in Games** — Real-world implementations

### Automatic Linking

- Combination pages automatically show **participating mechanics** as badges and sidebar cards
- Mechanic pages automatically show combinations they participate in
- Dimension pages automatically show combinations in `related_dimensions:` frontmatter

---

## 4. Categories

**Location:** `_data/categories.yml`  
**Format:** YAML data file (not a collection)

### Structure

```yaml
category-slug:
  name: "Display Name"
  description: "Brief explanation of this category"
  parent: null  # Optional: parent-category-slug for hierarchy
```

### Usage

Categories are tags used in mechanic frontmatter:

```yaml
categories:
  - resource-management
  - action-selection
```

Categories appear in the site's category browser and help users discover related mechanics by theme.

---

## Linking Between Content

### Mechanic ↔ Dimension

**In Mechanic:**
```yaml
dimensions:
  - action-selection
  - resource-economy
```

This automatically creates bidirectional links. The mechanic appears on the dimension page, and the dimension appears on the mechanic page.

### Mechanic ↔ Combination

**In Combination:**
```yaml
mechanics: [deck-building, worker-placement]
```

This automatically creates bidirectional links. The combination appears on both mechanic pages in the Combinations tab.

### Dimension ↔ Combination

**In Combination:**
```yaml
related_dimensions:
  - action-selection
  - timing-structure
```

This creates links from the combination to dimensions. Dimensions automatically show related combinations.

### Mechanic ↔ Mechanic

**In Mechanic:**
```yaml
related_mechanics:
  - worker-placement
  - action-programming
```

This creates manual cross-references between related mechanics (displayed in sidebar).

---

## Writing Tips

1. **Use consistent heading levels** — H2 (`##`) for main sections, H3 (`###`) for subsections
2. **Keep descriptions concise** — Frontmatter descriptions should be one sentence
3. **Use bullet points** — Makes content scannable and helps populate tables of contents
4. **Add practical examples** — Real games help readers understand concepts
5. **Link liberally** — Use slugs in frontmatter to create automatic connections
6. **Test your content** — View in Jekyll to ensure formatting and links work correctly

---

## Icon Reference

Use [Font Awesome 6.4.0](https://fontawesome.com/search) icon names (without the `fa-` prefix gets added automatically):

- **Common mechanic icons:** `dice`, `hand`, `coins`, `chess-board`, `puzzle-piece`, `layer-group`, `shuffle`
- **Common dimension icons:** `compass`, `hand-pointer`, `trophy`, `chart-line`, `users`, `clock`, `map`

---

## Testing Your Content

1. **Start Jekyll server:**
   ```bash
   bundle exec jekyll serve --port 4002
   ```

2. **View your content:** `http://localhost:4002/ars-mechanica/`

3. **Check for:**
   - Proper frontmatter parsing (page renders without errors)
   - Automatic links appear in sidebars
   - Table of contents populates (if using H2/H3 headings)
   - Dark/light theme displays correctly
   - Responsive layout works on mobile

---

## Questions?

For technical issues or questions about the content structure, review the existing content in `_mechanics/`, `_dimensions/`, and `_combinations/` for examples.
