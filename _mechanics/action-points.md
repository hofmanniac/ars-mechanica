---
title: "Action Points"
slug: action-points
icon: "fa-coins"
aliases: ["AP System", "Action Economy", "Action Allowance"]
categories:
  - resource-management
  - turn-structure
tags:
  - tactical
  - economy
  - allocation
  - optimization
complexity: medium
game_types:
  - tabletop-rpg
  - board-game
related_mechanics:
  - worker-placement
  - action-programming
combinations:
  - mechanics: [action-points, hand-management]
    creates: "Action Programming"
    description: "Combine action points with card play - players spend AP to play cards from hand, creating tension between card quality and action quantity"
  - mechanics: [action-points, dice-manipulation]
    creates: "Dice Action Selection"
    description: "Use dice results to determine available action points, adding randomness to action economy"
examples:
  - name: "Pandemic"
    description: "Each player has 4 actions per turn to move, treat diseases, share knowledge, or build research stations"
  - name: "Gloomhaven"
    description: "Players select two cards that determine their available actions and initiative for the round"
  - name: "Twilight Imperium"
    description: "Players have a limited number of command tokens to activate systems and perform strategic actions"
last_updated: 2026-04-19
overview: "Action Points (AP) is a resource management mechanic where players receive a fixed or variable number of points each turn that they can spend on various actions. This creates strategic decisions about how to best allocate limited resources across multiple possible actions."
---

## How It Works

Players typically:
1. Receive a set number of action points at the start of their turn
2. Spend these points to perform actions (movement, attacks, special abilities, etc.)
3. Different actions may cost different amounts of AP
4. Unused points are usually lost at turn end (though some games allow banking)

## Strategic Depth

Action points create several layers of strategy:

- **Efficiency**: Finding optimal combinations of actions
- **Tempo**: Balancing immediate needs vs. long-term planning
- **Flexibility**: Adapting to changing board states
- **Trade-offs**: Choosing between many small actions or fewer impactful ones

## Variations

**Fixed AP**: Every player gets the same number each turn (e.g., 4 actions in Pandemic)

**Variable AP**: Points may vary based on circumstances (e.g., character stats, cards played, board position)

**Shared Pool**: Some games have team-based AP pools where players must coordinate spending

**Carry Over**: Rare variants allow saving unused points for future turns

## Design Considerations

When implementing action points:

- **Cost Balance**: Ensure actions are appropriately priced relative to their impact
- **Analysis Paralysis**: Too many options can slow gameplay; consider limiting choices
- **Turn Length**: More AP means longer turns; balance engagement vs. downtime
- **Clarity**: Make costs clear and easy to reference

## Why Use This Mechanic

Action points work well when you want:
- Players to make meaningful tactical decisions each turn
- Asymmetric actions with different costs and values
- To prevent dominant strategies by limiting what can be done per turn
- A system that's easy to understand but offers depth

## Common Pitfalls

- **Optimal Paths**: Players may discover a "best" sequence of actions that becomes repetitive
- **Downtime**: Complex decision spaces can create analysis paralysis
- **Bookkeeping**: Tracking multiple costs and points can be fiddly without good player aids
