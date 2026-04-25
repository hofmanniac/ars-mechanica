---
title: "Worker Placement"
slug: worker-placement
icon: "fa-user-gear"
aliases: ["Action Drafting", "Meeple Placement"]
categories:
  - action-selection
  - player-interaction
tags:
  - blocking
  - drafting
  - competition
  - resource-conversion
complexity: medium
game_types:
  - board-game
  - euro-game
related_mechanics:
  - action-points
  - engine-building
  - resource-management
combinations:
  - mechanics: [worker-placement, deck-building]
    creates: "Deck-Building Worker Placement"
    description: "Workers are represented by cards in a deck; play cards from hand to place workers, combining deck optimization with placement strategy"
  - mechanics: [worker-placement, dice-manipulation]
    creates: "Dice Placement"
    description: "Use dice as workers, where the die face determines available actions or their strength"
examples:
  - name: "Agricola"
    description: "Place family members on action spaces to gather resources, build fences, and grow your farm"
  - name: "Lords of Waterdeep"
    description: "Place agents in different locations to recruit adventurers, complete quests, and gain rewards"
  - name: "Viticulture"
    description: "Wake up order determines turn order and bonus; workers placed on vineyard actions to plant, harvest, and make wine"
  - name: "Stone Age"
    description: "Multiple workers can be placed on some spaces; dice rolls determine resource yield"
last_updated: 2026-04-19
overview: "Worker Placement is an action selection mechanic where players take turns placing game pieces (workers, meeples, agents) on action spaces on a central board. Once a space is occupied, other players typically cannot use it that round, creating competition for desirable actions."
---

## How It Works

The basic structure:
1. Players start with a limited number of workers
2. On their turn, players place one worker on an available action space
3. The action is immediately resolved (or at end of round, depending on the game)
4. Once all workers are placed, workers return to players
5. The cycle repeats for the next round

## Core Dynamics

**Blocking**: The fundamental tension - players must choose between taking actions they need and denying actions to opponents.

**Turn Order**: Going early means more choices; going later might mean forced suboptimal plays.

**Timing**: When to claim critical spaces vs. when to take less contested actions.

**Planning**: Anticipating opponent needs and adjusting your strategy accordingly.

## Common Variations

### Exclusive Placement
Traditional model - one worker per space per round. Creates direct competition.

### Multiple Workers
Some spaces allow multiple workers (often with diminishing returns). Reduces blocking but maintains competition.

### Worker Types
Different workers with different capabilities or restrictions on which spaces they can access.

### Action Strengthening
Placing multiple workers on one space to make the action more powerful.

### Bumping/Displacement
Later players can displace earlier workers by paying a cost or penalty.

## Design Considerations

**Number of Workers**: Fewer workers = tighter competition and harder choices. More workers = more engine-building potential.

**Space Abundance**: Ratio of spaces to workers affects how much blocking occurs. More spaces = less conflict.

**Action Variety**: Balance between must-have actions and nice-to-have options creates interesting decisions.

**Scaling**: How does the game scale with different player counts? Add/remove spaces or adjust worker counts.

## Strategic Layers

**Efficiency**: Getting maximum value from limited worker placements

**Denial**: Blocking opponents from critical actions

**Flexibility**: Having backup plans when key spaces are taken

**Development**: Using workers to build engines that generate more workers or better actions

## Why Use This Mechanic

Worker placement excels at:
- Creating player interaction without direct conflict
- Providing clear, discrete decision points
- Scaling tension naturally (early rounds = abundant choices, late rounds = scarcity)
- Supporting both tactical and strategic play
- Making every player's turn meaningful to all players

## Common Pitfalls

**First Player Advantage**: Can be too powerful without mitigation (bidding for turn order, compensating bonuses)

**Dominant Actions**: Some spaces become must-haves every round, reducing variety

**Analysis Paralysis**: Too many options combined with blocking can slow play

**Multiplayer Solitaire**: If spaces are too abundant, players may not interact meaningfully

## Beginner-Friendly Aspects

- Visual and tactile (placing physical workers)
- Clear action resolution
- Easy to see what opponents are doing
- Self-limiting (can only do what your workers allow)

## Advanced Variations

Some games add layers like:
- Growing worker pools through gameplay
- Special ability workers
- Multiple placement phases per round
- Placement costs (pay resources to place)
- Persistent worker placement across multiple rounds
