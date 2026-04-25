# Ars Mechanica

**A comprehensive encyclopedia of game mechanics for tabletop games, board games, RPGs, and card games.**

🎲 **[Visit the Site](https://hofmanniac.github.io/ars-mechanica/)**

## About

Ars Mechanica (Latin: "The Art of Mechanics") catalogs, explains, and explores the building blocks that make games engaging, strategic, and fun. Each mechanic entry includes:

- Clear explanations of how the mechanic works
- Real-world examples from published games
- Strategic analysis and design considerations
- Common pitfalls and best practices
- Mechanic combinations that create hybrid systems

## Who Is This For?

- **Game Designers**: Reference library of mechanics and design patterns
- **Game Masters & Homebrewers**: Understanding mechanics for modifications and custom content
- **Players & Enthusiasts**: Learn why games work the way they do
- **Students & Educators**: Educational resource for game design concepts

## Features

- 📚 **Comprehensive Catalog**: Detailed entries for dozens of game mechanics
- 🔍 **Search Functionality**: Find mechanics by name, category, or tag
- 🏷️ **Multiple Indexes**: Browse by category, complexity, or game type
- 🔗 **Cross-Referencing**: Related mechanics and combinations
- 🎮 **Real Examples**: Every mechanic illustrated with actual games

## Categories

- Resource Management
- Action Selection
- Turn Structure
- Player Interaction
- Randomness & Uncertainty
- Scoring & Victory
- Character Development
- Spatial Mechanics
- Economic
- Narrative

## Running Locally

This is a Jekyll site hosted on GitHub Pages. To run it locally:

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler

### Installation

1. Clone this repository:
```bash
git clone https://github.com/hofmanniac/ars-mechanica.git
cd ars-mechanica
```

2. Install dependencies:
```bash
bundle install
```

3. Run the Jekyll server:
```bash
bundle exec jekyll serve --port 4002
```

4. Open your browser to `http://localhost:4002`

## Project Structure

```
ars-mechanica/
├── _mechanics/          # Individual mechanic entries (Markdown)
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _data/              # Data files (categories, etc.)
├── assets/
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript (search functionality)
├── categories/         # Category pages
├── _config.yml         # Jekyll configuration
└── index.md            # Home page
```

## Adding a New Mechanic

1. Create a new Markdown file in `_mechanics/` (e.g., `my-mechanic.md`)

2. Add front matter with required fields:

```yaml
---
title: "My Mechanic"
slug: my-mechanic
categories:
  - resource-management
tags:
  - economy
  - optimization
complexity: medium
game_types:
  - board-game
examples:
  - name: "Example Game"
    description: "How it uses this mechanic"
last_updated: 2026-04-19
---
```

3. Write the mechanic description in Markdown below the front matter

4. (Optional) Add `related_mechanics` and `combinations` to the front matter

## Contributing

Currently, Ars Mechanica is a curated encyclopedia. We welcome:

- **Bug reports**: Found an error? Open an issue!
- **Mechanic suggestions**: Ideas for mechanics we should add
- **Corrections**: Improvements to existing entries

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-mechanic`)
3. Commit your changes (`git commit -m 'Add new mechanic: My Mechanic'`)
4. Push to the branch (`git push origin feature/new-mechanic`)
5. Open a Pull Request

## License

Content: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

Code: MIT License

## Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Inspired by the amazing game design community

---

**Ars Mechanica** — *The Art of Mechanics*
