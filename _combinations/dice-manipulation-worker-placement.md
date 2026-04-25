---
title: "Dice Placement"
mechanics: [dice-manipulation, worker-placement]
description: "Roll dice and use their results as workers to place on action spaces — die value determines action strength or available options."
game_examples: []
design_notes: ""
related_dimensions: []
---

## Overview

This combination uses dice as workers, where face values determine which actions are available or how powerful they are. Randomness meets strategic placement in a push-your-luck framework.

## How It Works

Each turn follows a roll-modify-place sequence:

1. **Roll your dice**: Usually 3-6 dice per player that determine available actions
2. **Manipulate results**: Spend resources to reroll, flip, or adjust die faces
3. **Place dice as workers**: Put each die on an action space (often one die per space)
4. **Resolve actions**: Die value may determine action strength, resource quantity, or unlock special effects

**Common implementations**:
- **Value restrictions**: Spaces only accept certain die values ("place a 4+ here")
- **Value scaling**: Higher die values produce stronger effects
- **Value costs**: Use die value as payment for actions
- **Set requirements**: Combine multiple dice values to unlock powerful actions

## Why It Works

The dice add **manageable randomness** to worker placement's strategic planning:

- **Dynamic turns**: Every turn feels fresh because your roll determines available options
- **Risk mitigation**: Manipulation mechanics let skilled players reduce variance without eliminating excitement
- **Meaningful choices**: Deciding what to manipulate and what to accept creates engaging decisions
- **Catch-up mechanism**: Lucky rolls can help trailing players, while manipulation rewards skillful play

The combination prevents analysis paralysis — you can only plan with the dice you rolled, limiting option overload.

## Design Considerations

**Manipulation balance**: Too much manipulation makes dice deterministic; too little feels random and frustrating. Aim for 1-2 meaningful manipulations per turn.

**Space design**: Mix value-restricted spaces (tactical) with value-scaled spaces (push-your-luck) to create variety. Ensure low rolls have viable (if suboptimal) placements.

**Turn order**: Rolling dice simultaneously keeps pace brisk, but consider whether lower rolls should place first for catch-up balance.

**Blocking tension**: Dice restrictions already limit options — be careful about adding too many blocking rules or the game becomes frustrating when luck and blocking combine against a player.

## Examples in Games

This combination appears in games where dice serve dual purposes as randomizers and placement workers, with values determining action effects or restrictions.
