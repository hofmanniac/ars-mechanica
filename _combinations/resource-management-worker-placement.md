---
title: "Worker Placement Resource Collection"
mechanics: [resource-management, worker-placement]
description: "Place workers on action spaces to collect, convert, or spend resources, combining competition for actions with economic optimization."
game_examples: []
design_notes: ""
related_dimensions:
  - action-selection
  - resource-economy
  - player-interaction
---

## Overview

This classic combination forms the backbone of countless Euro-style games. Workers act as the mechanism for resource acquisition and conversion, while resource management provides the economic framework that drives worker placement decisions. Players compete for action spaces that offer the resources they need, creating tension between planning and adaptation.

## How It Works

**Resource Acquisition Through Placement**:
1. Players place workers on action spaces
2. Action spaces provide resources (wood, stone, food, etc.)
3. Some spaces give fixed amounts, others variable (more workers = more resources)
4. Blocking prevents opponents from accessing critical resources
5. Resources enable additional worker placements or other game actions

**Typical Action Space Types**:

**Basic Resource Spaces**
- "Gain 2 wood"
- "Gain 1 stone + 1 clay"
- Simple, reliable resource generation

**Variable Yield Spaces**
- "Gain 1 wood per worker placed"
- "All workers here collect 1 gold each"
- Rewards committing multiple workers

**Conversion Spaces**
- "Trade 2 wood for 1 stone"
- "Convert any 3 resources into any 1 resource"
- Transform abundant resources into scarce ones

**Accumulating Spaces**
- Resources accumulate on unvisited spaces
- "Gain all resources here (resets after claimed)"
- Creates timing decisions

**Compound Spaces**
- "Gain 1 wood, then may buy 1 improvement"
- Action + resource generation combined
- Efficiency rewards

## Why It Works

This combination creates multi-layered strategic tension:

**Competition for Scarcity**
- Multiple players need same resources
- Blocking creates immediate interaction
- Must adapt when key spaces taken

**Economic Planning**
- Calculate which resources needed for goals
- Plan multi-turn resource chains
- Optimize acquisition paths

**Tactical Flexibility**
- Adjust plans based on available spaces
- Opportunistic resource collection
- Backup plans when blocked

**Timing Pressure**
- When to claim key resources
- When to accept suboptimal spaces
- Racing for limited supplies

**Priority Management**
- Which resources are most urgent?
- Balance immediate needs vs. long-term building
- Opportunity cost on every placement

## Design Considerations

### Action Space Design

**Resource Abundance**

How many spaces offer each resource?
- **Single source**: High competition, frequent blocking (tense but frustrating)
- **Multiple sources**: More options, less blocking (accessible but less interactive)
- **Sweet spot**: 2-3 sources per resource type at 4 players

**Yield Scaling**

How much do spaces produce?
- **Fixed yields**: Predictable, simple (1 wood, 2 clay)
- **Variable yields**: Dynamic, situational (1 per building, 1 per worker)
- **Scaling by player count**: Ensures adequate supply at all counts

**Space Capacity**

Can multiple workers occupy same space?
- **Exclusive**: One worker only (high blocking, competitive)
- **Multi-occupancy**: Multiple workers allowed (reduces tension)
- **Limited multi**: 2-3 workers max (middle ground)
- **Consideration**: Exclusive spaces for key resources, multi for common ones

### Resource Sink Balance

**Are resources worth claiming?**

Ensure resources have valuable uses:
- Multiple meaningful spending options
- Resources enable victory paths
- All resources relevant (no "trap" resources)
- Balance scarcity with utility

**Conversion Efficiency**

Fair exchange rates:
- Conversion spaces should be useful but not mandatory
- Don't let bad RNG force players into terrible conversions
- Some inefficiency acceptable (2:1 exchange) to maintain resource value

### Worker Scaling

**How many workers do players have?**
- **Few workers (2-4)**: Every placement critical, tight competition
- **Many workers (6-10)**: More choices, engine-building emphasis
- **Variable**: Players gain workers through game (progression)

**Worker acquisition**:
- Fixed count (simple, consistent)
- Purchasable workers (resource sink, strategic choice)
- Temporary workers (special actions grant extra placements)

### Blocking Impact

**How punishing is blocking?**

Mitigate frustration while maintaining interaction:
- **Multiple paths**: Different resources achieve similar goals
- **Accumulating spaces**: Skipped spaces become more valuable
- **Conversion options**: Transform unwanted resources
- **Asymmetric needs**: Players want different resources

**First player advantage**:
- Rotating first player
- Turn order auction/bidding
- Compensation for going later (bonus resources)

### Resource Storage

**Should resources be limited?**
- **Unlimited**: Simplifies tracking, enables hoarding strategies
- **Limited capacity**: Adds pressure to spend, prevents stockpiling
- **Expandable storage**: Storage becomes acquisition target
- **No storage**: Use-it-or-lose-it creates urgency

### Pacing Through Game

**Resource flow over time**:

**Early game**: Scarce resources, critical every placement
**Mid game**: Production increases, more strategic choices
**Late game**: Resources more abundant, focus on optimization

Design space yields and worker counts to match desired pacing.

## Strategic Layers

**Priority Assessment**
- Which resources are bottlenecks right now?
- What do opponents desperately need?
- Can I afford to skip this resource type?

**Placement Sequencing**
- Order of worker placements matters
- Block opponents first or secure own resources?
- Save workers for better spaces or claim now?

**Resource Forecasting**
- What will I need in 2-3 rounds?
- Am I building toward sufficient production?
- Will I have resources when I need them?

**Opponent Awareness**
- What resources do opponents lack?
- Can I deny critical resources?
- Should I take spaces defensively?

**Efficiency Optimization**
- Minimize wasted placements
- Maximize resource-to-action ratio
- Find combo placements (resource + use in one turn)

## Common Pitfalls

**Resource Starvation**: If players can be completely blocked from essential resources, game becomes frustrating. Always provide backup access (even if inefficient).

**Mandatory Spaces**: If certain spaces are always correct to claim, decisions become rote. Balance space values so choices are context-dependent.

**Snowballing**: Players who get early resources can dominate. Include catch-up mechanisms or diminishing returns.

**Repetitive Patterns**: If optimal placement pattern is obvious, becomes mechanical. Create varied board states or dynamic space values.

**Analysis Paralysis**: Too many resources + too many spaces = overwhelming choices. Limit scope or provide clear strategic frameworks.

**Tedious Accounting**: Constantly tracking many small resource changes slows game. Use resource tracks or batch updates.

**Blocking Dominance**: If blocking is always correct, game becomes purely adversarial. Ensure acquiring for yourself is often better than denying opponents.

## Examples in Games

**Agricola**: Place family members to collect wood, clay, reed, stone, grain, vegetables, and animals. Resources are scarce early, and critical spaces get blocked frequently. Careful planning required.

**Stone Age**: Workers placed in forest, clay pit, quarry, river collect resources with dice rolls. Multiple workers can be placed in same resource area (more workers = more dice = more resources).

**Lords of Waterdeep**: Place agents to collect adventurers (resource types) and gold. Agents used to complete quests which require specific resource combinations. Simple, accessible implementation.

**Viticulture**: Workers collect vine cards, visitor cards, and resources (lira), or perform actions like planting, harvesting, and making wine. Wake-up order determines turn order and bonus structure.

**Caverna**: Place dwarves to gather resources (wood, stone, ore, food), which are used to excavate mountain caves and build rooms. Resources flow increases as game progresses through dual-use action spaces.

**A Feast for Odin**: Complex economy with 12+ resource types and numerous conversion paths. Many action spaces, less blocking, emphasis on optimization over competition.
