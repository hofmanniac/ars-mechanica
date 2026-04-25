---
title: "Action Selection"
slug: action-selection
icon: "fa-hand-pointer"
description: "How players decide what to do on their turn"
order: 1
---

## What This Dimension Represents

Action Selection is the interface between player intent and game state. It answers the fundamental question: **"How do players decide what to do?"**

This dimension shapes the moment-to-moment gameplay experience and directly impacts strategic depth, pacing, and player agency. The way actions are chosen influences everything from analysis paralysis to competitive dynamics.

Every game needs some form of action selection, making this one of the most critical design dimensions. The mechanic you choose here sets the tone for the entire play experience.

## Common Mechanics

These are the most frequently used mechanics for implementing action selection:

### Worker Placement
Players compete for limited action spaces by placing workers/tokens. Creates direct competition and blocking opportunities. High player interaction with spatial decision-making.

### Action Points
Players receive a budget of points to spend across multiple possible actions. Encourages optimization and flexible tactics. Different actions may cost different amounts.

### Drafting
Players simultaneously select options from a pool and pass remaining choices to opponents. Combines personal strategy with reading signals and denial tactics.

### Hand Management
Players choose which cards to play from their hand for actions. Cards may have multiple uses or synergies. Encourages long-term planning and hand composition strategy.

### Turn Order Selection
Players bid for or choose position in the turn order, with different positions offering different advantages. Balances going first vs. having better options.

## Uncommon Implementations

These creative approaches to action selection demonstrate alternative design space:

### Dice as Actions
**Example: Alien Frontiers**
Roll dice and assign their results to action spaces, with different spaces requiring specific die values. Combines luck with strategic allocation.

### Real-Time Selection
**Example: Escape: The Curse of the Temple**
Players simultaneously and frantically grab dice and roll them to perform actions. Speed and dexterity become factors alongside decision-making.

### Action Programming
**Example: RoboRally**
Pre-commit to a sequence of actions before execution. Creates chaos when plans interact unexpectedly. Rewards prediction and adaptation.

### Auction for Actions
**Example: Amun-Re**
Players bid resources to claim action opportunities. Higher bidders get first pick or better actions. Economic strategy meets action selection.

### Action Queue/Pipeline
**Example: Tzolk'in**
Actions become available over time as pieces move through a queue. Timing and planning become critical dimensions.

### Deck-Based Actions
**Example: Gloomhaven**
Your deck of cards determines available actions each turn. Deck composition and card synergies drive strategy.

## Dimensional Intersections

Action Selection interacts with every other dimension, but these combinations are especially significant:

### × Resource Economy
Actions typically cost resources (action points, cards, coins) or generate them. The economy fuels the action engine.
- Worker Placement + Resource Costs = Strategic trade-offs
- Action Points + Resource Generation = Economy management

### × Spatial
Location often determines which actions are available. Position becomes a strategic resource.
- Worker Placement on Board Spaces = Agricola, Caylus
- Card Play with Spatial Effects = Hero Realms

### × Player Interaction
Action selection often mediates player conflict through blocking, denial, or competition.
- Competitive Worker Placement = Direct conflict
- Drafting = Indirect denial

### × Timing & Structure
When actions happen affects their value and interactions.
- Turn Order Selection = Priority becomes strategic
- Simultaneous Action Selection = Reduced downtime

### × Progression
Action selection can improve over time as players gain abilities.
- Unlocking New Actions = Character development
- Deck Building = Improving action quality

## Design Questions

When designing action selection mechanics, consider:

**Agency vs. Constraint**
- How much control do players have over their options?
- Are actions always available, or situationally?
- Does constraint create interesting decisions or frustration?

**Simultaneous vs. Sequential**
- Do players choose actions at the same time or take turns?
- How does turn order affect fairness and strategy?
- What's the impact on downtime and engagement?

**Information Availability**
- Can players see all available actions?
- Are some actions hidden or uncertain?
- Does information asymmetry create depth or confusion?

**Scope of Actions**
- Are actions small and tactical, or large and strategic?
- How many actions does a turn contain?
- What's the balance between impactful and incremental choices?

**Competition vs. Cooperation**
- Do players compete for actions (blocking)?
- Can actions help multiple players?
- Is denial a central strategy or a side effect?

**Reversibility**
- Can actions be undone or modified?
- Are commitments permanent?
- Does uncertainty require hedging strategies?

## Why This Dimension Matters

Action Selection determines:
- **Pacing**: How fast does the game move?
- **Interactivity**: How much do players affect each other?
- **Depth**: How many meaningful decisions exist?
- **Accessibility**: How easy is it to learn and play?
- **Replayability**: Do different action choices lead to varied experiences?

## Design Patterns

**Pattern: Expanding Action Space**
Start with limited actions and unlock more over time. Creates progression and reduces early-game complexity.

**Pattern: Action Efficiency**
Some actions become more efficient (more output per cost) as the game progresses. Rewards building toward powerful combinations.

**Pattern: Action Denial**
Taking an action prevents opponents from using it. Creates tension and forces adaptation.

**Pattern: Multi-Use Actions**
Single actions serve multiple purposes, creating interesting trade-offs. Increases decision density without adding rules overhead.

## Common Pitfalls

**Analysis Paralysis**
Too many equally viable options slow gameplay to a crawl. Solution: Reduce choices, add time limits, or make some choices clearly better in context.

**Dominant Strategy**
One action is always correct, reducing meaningful choice. Solution: Balance action values, create situational advantages, or add scarcity.

**Runaway Leader**
Better actions enable getting even better actions. Solution: Catch-up mechanics, diminishing returns, or symmetric action availability.

**Lack of Interaction**
Players select actions independently without affecting each other. Solution: Add competition for actions, blocking, or resource scarcity.
