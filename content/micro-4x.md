+++
title = "Micro 4X"
description = "A microscopic turn-based strategy game"
date = 2023-07-22
draft = false
slug = "micro-4x"

[taxonomies]
categories = ["media"]
tags = ["videogame", "software", "development"]

[extra]
comments = true
+++

---
# Introduction
---
Every now and then, I enjoy playing 4X games such as Civ. What I dislike about them, however, is that the gameplay slows down significantly as the game goes on. As the player gets more settlements, more units, more resources, they must make more decisions per turn.

---
# Goal
---
I'd like to try building a more compact version of the core gameplay loop, to study what makes games in this genre tick, and to explore how gameplay is influenced if we start tinkering with certain elements.

---
# Process
---
I came up with a few basic components of the game, starting from the namesake of the genre. ["4X"](https://en.wikipedia.org/wiki/4X) refers to the 4 pillars of gameplay: Explore, Expand, Exploit, Exterminate. Let's examine how we can represent each pillar in the game.

---
## Explore
---
The player needs to explore the world in order to discover other [**buildings**](#buildings), [**resources**](#resources), enemies, and so on. At the start of the game, information about the world is obscured by [**fog of war**](#fog-of-war), which can be cleared by gaining [**line of sight**](#line-of-sight), typically by moving units around.

---
## Expand
---
The player's territory is represented by their settlements, or [**towns**](#town). The more towns the player controls, the more resources they are able to exploit, and the more units they are able to produce.

---
## Exploit
---
The world has a variety of resources that will benefit the player if they are able to exploit them. In order to exploit a [**resource**](#resources), the player needs to build a [**camp**](#camp) by using a [**builder**](#builder).

---
## Exterminate
---
To defend themselves from enemies, or to conquer occupied territory, players can create [**warriors**](#warrior).

---
# Winning the game
---
- Find all treasure
- Defeat all enemies

---
# Losing the game
---
- Lose all towns

---
### Units
---
#### Builder
##### Description
Builders are specialized units that cannot fight, but they can transform into a building.
##### Cost
- Turns: 1 
- Water: 0
- Wood: 0
- Stone: 0
##### Stats
- Move: 2
- Attack: 0
- Health: 2
##### Abilities
- Build: Transform into building, depending on which tile the builder is occupying. On a resource tile, the builder builds a [**camp**](#camp). Otherwise, they build a [**town**](#town).

---
#### Scout
##### Description
Scouts are fast, but weak. They are designed for exploring, not for combat. We can represent this as a high move stat, low health, and low attack.

##### Cost
- Turns: 2
- Water: 1
- Wood: 0
- Stone: 0 
##### Stats
- Move: 3
- Attack: 1
- Health: 1
#### Abilities
- Collect: Pick up treasure. A scout carrying treasure will automatically store it in a town.

---
#### Warrior
##### Description
Warriors are strong, but slow. It's important to position them well, as they are vulnerable to being outmanoeuvred by faster units.

##### Cost
- Turns: 3
- Water: 1
- Wood: 1
- Stone: 1
##### Stats
- Move: 1
- Attack: 2
- Health: 3

---
#### Enemy
##### Description
Enemies are a threat to our towns, camps, and units. They need 1 attack to kill a scout/builder, 2 for a warrior/camp, and 3 for a town.

##### Stats
- Move: 2
- Attack: 2
- Health: 2

---
### Buildings
---
#### Town
##### Description
Towns grow the player's territory, at a rate of 1 tile per turn.
##### Cost
- Turns: 0
- Water: 1
- Wood: 1
- Stone: 1
##### Stats
- Move: 0
- Attack: 0
- Health: 5

---
#### Camp
##### Description
Camps generates resources of the tile type they occupy, at a rate of 1 per turn.
##### Cost
- Turns: 0
- Water: 0
- Wood: 0
- Stone: 0
##### Stats
- Move: 0
- Attack: 0
- Health: 3

---
### Resources
---
#### Water
Most essential, required for everything except camps and builders
#### Wood
Tier 1, required for basic units/buildings
#### Stone
Tier 2, required for advanced units/buildings
#### Treasure
Win condition, collectable by scouts

---
### Mechanics & Keywords
---
#### Visible
Any tile within line of sight of a player tile is considered visible.
#### Fog of war
The initial state of any world tile that is not visible to player.
#### Line of sight
A range around a tile that determines which surrounding tiles are visible from that tile.
#### Territory
The area under a player's control. Buildings can only be constructed within a player's territory.
