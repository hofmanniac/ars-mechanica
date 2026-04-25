---
title: "Card-Driven Worker Placement"
mechanics: [hand-management, worker-placement]
description: "Cards in hand determine available actions or provide resources for worker placement."
game_examples: []
design_notes: ""
related_dimensions: []
---

## Overview

This combination uses cards to enable, enhance, or restrict worker placement options, creating a layer of hand management decisions on top of placement competition.

## How It Works

Cards interact with worker placement in various ways:

**Card functions**:
- **Access cards**: Cards unlock specific action spaces
- **Resource cards**: Play cards as payment for actions
- **Bonus cards**: Cards boost worker effectiveness
- **Worker cards**: Cards represent placeable workers themselves
- **Modifier cards**: Change action space effects

**Typical implementation**:
1. Draw/manage hand of 5-7 cards
2. Place workers on action spaces
3. Play cards from hand to activate/enhance actions
4. Cards discarded/cycled create hand management
5. Draw new cards for next turn

**Strategic decisions**:
- Which cards to hold for future turns?
- Which workers to place based on available cards?
- Which cards to discard/cycle to draw new ones?
- When to play cards for maximum impact?

## Why It Works

The combination creates multi-layered decisions:

- **Planning depth**: Consider both placement and hand composition
- **Timing matters**: Right card at right time creates powerful plays
- **Flexibility**: Cards provide options beyond basic placements
- **Hand composition**: Managing hand quality affects placement power
- **Mitigation**: Bad placements can be salvaged with good cards

Worker placement alone can feel deterministic once you know action spaces. Cards add variability and tactical options.

## Design Considerations

**Card-worker relationship**: Are cards essential ("must have cards to act") or beneficial ("cards boost actions")? Essential creates swingy draw luck; beneficial maintains baseline play.

**Hand size management**: 5-7 cards typical. Larger hands reduce draw luck but slow decisions. Smaller hands feel limiting with many action spaces to consider.

**Draw timing**: Draw at start of turn (plan with full info) vs. during turn (reactive) vs. end of turn (planning for next round).

**Discard/draw mechanics**: Can players cycle cards they don't need? Or stuck with draws? Cycling reduces luck but adds actions per turn.

**Action space clarity**: With cards modifying spaces, keep base actions clear. Avoid "action does X, unless Y card, then Z" complexity.

**Card acquisition**: Fixed deck all players draw from (shared luck) vs. personal decks (customization) vs. no acquisition (static cards)?

**Hand visibility**: Hidden hands (standard) create information advantage. Open hands (rare) reduce AP but add transparency.

**Balance**: Ensure no single card enables dominant strategy. All cards should be situationally useful.

## Examples in Games

This combination appears in worker placement games where cards enable special abilities, provide resources, or modify action spaces, requiring players to manage both placement timing and hand composition.
