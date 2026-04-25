---
title: "Drafting"
slug: drafting
icon: "fa-hand-pointer"
aliases: ["Card Drafting", "Draft Selection", "Pick and Pass"]
categories:
  - action-selection
  - hand-management
tags:
  - simultaneous
  - strategic
  - interactive
  - information
complexity: medium
game_types:
  - board-game
  - card-game
related_mechanics:
  - hand-management
  - set-collection
  - engine-building
combinations:
  - mechanics: [drafting, set-collection]
    creates: "Draft to Collect"
    description: "Players draft cards to build sets, combining selection strategy with collection goals like in Sushi Go or 7 Wonders"
  - mechanics: [drafting, engine-building]
    creates: "Draft and Build"
    description: "Draft cards that build an engine of abilities and resources, with each pick enabling future strategies"
  - mechanics: [drafting, worker-placement]
    creates: "Draft Workers"
    description: "Draft worker cards or tiles that provide placement abilities, combining selection with placement strategy"
examples:
  - name: "7 Wonders"
    description: "Classic card drafting where players simultaneously pick one card from their hand and pass the rest to their neighbor"
  - name: "Sushi Go!"
    description: "Fast-playing drafting game where players collect sets of sushi cards for points"
  - name: "Blood Rage"
    description: "Strategic drafting of cards at the start of each age to gain units, upgrades, and special abilities"
  - name: "Dominion (Kingdom Cards)"
    description: "Pre-game drafting of which 10 kingdom card types will be available for purchase during the game"
  - name: "Magic: The Gathering (Draft Format)"
    description: "Players open booster packs, pick one card, and pass the rest, building decks from drafted cards"
last_updated: 2026-04-24
overview: "Drafting is a mechanic where players select items (typically cards) from a shared pool, often passing the remaining options to other players. This creates strategic tension as players must balance taking what they need with denying opponents valuable picks, all while reading signals about what others are collecting."
---

## How It Works

The basic drafting flow involves:

1. **Pool Formation**: A set of items (usually cards) is made available to all players
2. **Selection**: Each player simultaneously picks one item from their available options
3. **Passing**: The remaining items are passed to the next player (or reshuffled/refreshed)
4. **Repeat**: The process continues until all items are drafted or a stopping condition is met

The simultaneous selection keeps the game moving quickly while ensuring all players get equal opportunities.

## Strategic Depth

Drafting creates multiple layers of strategic decision-making:

### Primary Considerations

- **Personal Strategy**: Taking cards that advance your own game plan
- **Hate Drafting**: Denying opponents powerful cards they need
- **Signaling**: The cards you pass send information about your strategy
- **Reading Signals**: Cards that come back to you reveal what others are taking
- **Flexibility**: Adapting strategy based on what's available

### Information Game

Drafting is fundamentally about information management:
- **Open Information**: In many games, drafted cards are visible, letting you track opponent strategies
- **Hidden Information**: Private draft picks create uncertainty and bluffing opportunities  
- **Signal Reading**: Cards that "wheel" (come back to you) indicate they're unpopular or unwanted
- **Counter-drafting**: Taking cards to block specific opponent strategies

### Timing Decisions

- **Early Picks**: Establish your strategy direction
- **Mid-Draft**: Balance building your engine with denying opponents
- **Late Picks**: Fill gaps and optimize final synergies

## Variations

### Classic Pass-and-Pick
Players receive hands of cards, pick one, and pass the rest to their neighbor. Most common in card games like 7 Wonders.

### Snake Draft
Players take turns selecting in order (1-2-3-4, then 4-3-2-1), often used for initial setup or team selection.

### Open Draft / Market Draft
All available options are visible to all players. Players take turns selecting from the common pool. More information but less simultaneous.

### Pack Draft
Players open packs of random cards, draft from them in multiple rounds. Common in collectible card games like Magic: The Gathering.

### Auction Draft
Instead of free selection, players bid resources to claim drafted items, combining drafting with economic strategy.

### Rotisserie Draft
Players take turns selecting items in a fixed order, often used when drafting from a complete known pool.

### Closed Draft / Blind Draft
Players draft without seeing other players' selections, reducing the information game.

### Timed Draft
Players have a time limit to make selections, adding real-time pressure.

## Design Considerations

When implementing drafting:

**Pool Size and Diversity**
- Too small: Limited strategic choices, luck dominates
- Too large: Analysis paralysis, overwhelming options
- Sweet spot: Usually 7-10 cards per player for a single draft round
- Ensure variety so multiple strategies remain viable

**Draft Speed**
- Simultaneous selection keeps pace fast and engagement high
- Turn-based selection allows more deliberation but can create downtime
- Consider player count impact on draft duration

**Information Visibility**
- Showing drafted cards creates a deeper strategic game
- Hidden drafts reduce analysis paralysis but limit counter-play
- Partial visibility (show some, hide others) can balance these concerns

**Synergy Depth**
- Items should have interactions and combos to reward cohesive strategies
- Avoid "trap" options that seem good but consistently underperform
- Balance generically useful cards with specialized ones

**Hate Drafting Balance**
- If denying opponents is too strong, optimal play becomes defensive and frustrating
- If it's too weak, players ignore opponents entirely
- Sweet spot: Taking a mediocre card to deny an opponent should feel meaningful but costly

## Why Use This Mechanic

Drafting works well when you want:

- **Simultaneous play**: All players engaged at once, minimal downtime
- **Strategic depth**: Multiple valid paths with meaningful choices
- **Skill expression**: Reading signals and adapting rewards experience
- **Replayability**: Randomized card pools create fresh experiences
- **Balanced competition**: Everyone gets equal opportunities to draft

The mechanic appeals to players who enjoy:
- **Information games**: Reading opponents and sending signals
- **Optimization**: Building efficient combinations from available options
- **Adaptation**: Pivoting strategies based on what's available
- **Risk assessment**: Evaluating when to commit to a strategy vs. staying flexible

## Common Pitfalls

**Too Much Hate Drafting**: If optimal play is always denying opponents rather than building your own strategy, the game becomes negative and unfun. Solution: Make synergies strong enough that building combos beats pure denial.

**Runaway Information Advantage**: Experienced players may dominate by reading signals that newer players miss. Solution: Limit visible information or add randomness to reduce perfect information.

**Analysis Paralysis**: Too many options or complex interactions can grind the game to a halt. Solution: Use timers, simplify card effects, or reduce pool sizes.

**Linear Strategies**: If one strategy is obviously best, all players draft the same cards, reducing variety. Solution: Balance card power and ensure multiple viable approaches.

**Draft Position Advantage**: Going first (or last) in certain formats can be overwhelmingly strong. Solution: Use snake drafts, compensating mechanisms, or rotating positions.

**Luck Domination**: If draft pools are too random, skilled play can't overcome bad luck. Solution: Increase pool sizes, allow re-draws, or use constructed pools.

## Combining with Other Mechanics

Drafting pairs naturally with:

- **Set Collection**: Draft cards to complete sets (Sushi Go!)
- **Engine Building**: Draft components to build synergistic engines (7 Wonders)
- **Tableau Building**: Draft cards to add to your personal play area
- **Resource Management**: Draft resource-generating or resource-consuming cards
- **Area Control**: Draft units or actions to control territories
- **Worker Placement**: Draft workers or abilities for placement phases

## Advanced Techniques

**Splash Damage**: Some cards affect multiple players, creating multi-layered drafting decisions (help one opponent to hurt another).

**Cascading Picks**: Early picks unlock or enable later picks, rewarding long-term planning and setup.

**Color/Faction Commitment**: Early picks push players toward specific strategies that later picks reinforce, creating natural story arcs.

**Draft Memory**: In multi-round drafts, remembering what was in previous packs helps predict what's coming back.

**Pack Odds**: In randomized drafts, understanding card distribution probabilities informs pick decisions.

**Signaling Bluffs**: Intentionally passing cards to send false signals about your strategy.

## Examples in Practice

**7 Wonders**: Players draft building cards to develop their ancient civilization. Passing cards to neighbors and reading what comes back creates a dynamic information game. Cards have costs and prerequisites, rewarding cohesive strategies.

**Sushi Go!**: Lighter drafting game focused on set collection. Multiple set types (maki rolls, tempura, sashimi) create diverse strategies. Simple card effects and fast play make it accessible while retaining strategic depth.

**Blood Rage**: Strategic drafting combined with area control. Players draft gods, upgrades, and units that enable different playstyles (combat-focused, questing, Ragnarok manipulation). Hate drafting is meaningful but building synergies is stronger.

**Magic: The Gathering (Draft)**: Deep strategic drafting with 24 cards from 3 packs. Color commitment, curve considerations, synergy building, and rare bomb picks create complex decisions. Open information (seeing others' drafted cards) at higher levels adds another layer.

## Timing in Game Structure

Drafting can occur at different points:

**Setup Phase**: Draft what will be available during the game (Dominion kingdom cards)

**Pre-Round**: Draft resources or abilities before each round of play (Blood Rage)

**During Play**: Continuous drafting as a core game action (Sushi Go!)

**Multiple Phases**: Draft different things at different times (cards early, powers later)

Each timing has different strategic implications and pacing effects.
