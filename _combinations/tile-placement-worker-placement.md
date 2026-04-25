---
title: "Tile Placement with Worker Actions"
mechanics: [tile-placement, worker-placement]
description: "Place tiles to build the map, then place workers on the tiles for actions or area control."
game_examples: []
design_notes: ""
related_dimensions: []
---

## Overview

This combination has players first construct a board through tile placement, then use that constructed board for worker placement actions, creating layered strategic decisions about building and utilizing space.

## How It Works

Tile placement and worker placement happen in phases or simultaneously:

**Phase-based approach**:
1. **Tile phase**: All players place tiles to build the board
2. **Worker phase**: Place workers on the built board
3. Tiles create/modify action spaces for workers

**Simultaneous approach**:
- Place tile, then immediately place worker on it
- Or place tile and worker in single action

**Tile properties**:
- **Action spaces**: Tiles provide worker action options
- **Resources**: Tiles generate resources when worked
- **Scoring zones**: Worker placement on tiles scores points
- **Restrictions**: Some tiles limit which workers can use them
- **Bonuses**: Tiles modify adjacent tile effects

**Strategic layers**:
- **Build for yourself**: Create tiles you want to use
- **Build for others**: Block opponent strategies with tile placement
- **Competition**: Race to place workers on best tile spaces
- **Spatial planning**: Tile adjacency affects worker placement value

## Why It Works

The combination creates compelling multi-phase strategy:

- **Construction impacts competition**: The board you build determines placement options
- **Forward planning**: Place tiles anticipating where you'll place workers
- **Emergent complexity**: Tile configurations create unique situations
- **Spatial puzzles**: Both tile fitting and worker optimization
- **Adaptability**: Must work with the board that emerges

Players can't just react to a static board — they actively shape the playing field while competing on it.

## Design Considerations

**Tile-worker timing**: Simultaneous (place tile with worker) is streamlined but limits tile competition. Sequential (all tiles then all workers) creates more planning depth but more downtime.

**Public vs. private benefit**: Should tiles you place benefit everyone (public board) or only you (personal area)? Public creates shared incentives; private allows specialization.

**Action space density**: How many action spaces per tile? Dense (multiple spaces per tile) creates complexity; sparse (one space per tile) emphasizes tile placement.

**Blocking mechanics**: Can workers block spaces on tiles? If yes, creates placement competition. If no, reduces interaction but speeds play.

**Tile variety**: 10-20 unique tile types provides strategic variety. Too few feels repetitive; too many overwhelms.

**Spatial constraints**: Do tiles have placement restrictions (must match edges, specific patterns)? Restrictions add puzzle elements but slow play.

**Turn order**: Who places tiles first? Who places workers first? Turn order significantly affects who gets prime spaces.

**Permanence**: Do tiles stay all game, or can they be replaced/removed? Permanent is simpler; dynamic is more interactive.

## Examples in Games

This classic combination appears in games where players build a shared board with tiles and then compete for spaces on those tiles with worker placement mechanics.
