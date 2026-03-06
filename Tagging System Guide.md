# Tagging System Guide

## Complete Obsidian Tag Reference

This guide explains how to tag cards in your Magic library for easy searching and filtering.

---

## 🎨 COLOR TAGS

Use these tags to categorize cards by color. Multi-color cards should have **multiple color tags**.

### Single-Color Cards

```
#color/red           (Mountains - Red mana)
#color/white         (Plains - White mana)
#color/green         (Forests - Green mana)
#color/black         (Swamps - Black mana)
#color/blue          (Islands - Blue mana)
#color/colorless     (Artifacts, lands with no color)
```

### Multi-Color Combinations

**Two-Color (Enemy Pairs):**
```
#color/red #color/white       → Boros (aggressive)
#color/blue #color/red        → Izzet (spells)
#color/black #color/green     → Golgari (reanimation)
#color/white #color/green     → Selesnya (growth)
#color/blue #color/black      → Dimir (control)
```

**Two-Color (Allied Pairs):**
```
#color/red #color/green       → Gruul (ramp)
#color/black #color/red       → Rakdos (aggro)
#color/blue #color/white      → Azorius (control)
#color/black #color/white     → Orzhov (midrange)
#color/green #color/blue      → Simic (growth)
```

**Three-Color:**
```
#color/red #color/green #color/black         → Jund
#color/white #color/blue #color/green        → Bant
#color/blue #color/black #color/red          → Grixis
#color/white #color/black #color/red         → Mardu
#color/white #color/blue #color/black        → Esper
```

**Example:**
```
Card: Deus of Calamity
Tags: #color/red #color/green #type/creature #creature-type/horror
```

---

## 🧩 TYPE TAGS

Use these to categorize cards by what they do:

### Main Types

```
#type/creature       (Any creature card)
#type/instant        (Blue or green instant, etc.)
#type/sorcery        (Red sorcery, Black sorcery, etc.)
#type/enchantment    (Global effects, auras, etc.)
#type/artifact       (Mana rocks, Equipment, etc.)
#type/land           (Mana sources)
#type/planeswalker   (Planeswalkers)
#type/tribal         (Tribal effects without creature stats)
```

### Artifacts Subtypes

```
#type/equipment      (Swords, armor, etc.)
#type/mana-rock      (Sol Ring, Signet, etc.)
#type/mana-accelerant (Disk, Surge Rod, etc.)
```

**Example:**
```
Card: Arcane Signet
Tags: #type/artifact #type/mana-rock #color/colorless
```

---

## 🐉 CREATURE TYPE TAGS

For creature cards, use their creature type:

### Humanoid Types

```
#creature-type/human
#creature-type/elf
#creature-type/dwarf
#creature-type/goblin
#creature-type/merfolk
#creature-type/vampire
#creature-type/zombie
#creature-type/wizard
#creature-type/knight
#creature-type/soldier
#creature-type/cleric
#creature-type/druid
#creature-type/ranger
```

### Beast Types

```
#creature-type/beast
#creature-type/dragon
#creature-type/phoenix
#creature-type/hydra
#creature-type/wurm
#creature-type/elemental
#creature-type/dinosaur
#creature-type/cat
#creature-type/wolf
#creature-type/ooze
#creature-type/spider
#creature-type/insect
```

### Tribal Types

```
#creature-type/minotaur
#creature-type/faerie
#creature-type/spirit
#creature-type/construct
#creature-type/golem
#creature-type/homunculus
#creature-type/ally
#creature-type/angel
#creature-type/demon
```

**Example:**
```
Card: Rageblood Shaman
Tags: #color/red #type/creature #creature-type/minotaur
```

---

## 🎯 ROLE / FUNCTION TAGS

Optional tags for deck-building purposes:

```
#role/ramp           (Mana acceleration)
#role/removal        (Destruction effects)
#role/card-draw      (Card advantage)
#role/board-wipe     (Mass removal)
#role/finisher       (Win condition)
#role/lord           (Creature buff)
#role/token-gen      (Token generation)
#role/sacrifice      (Sac outlet / payoff)
#role/control        (Slowing opponent)
#role/protection     (Hexproof, protection)
```

**Example:**
```
Card: Kodama's Reach
Tags: #color/green #type/sorcery #role/ramp
```

---

## 📊 SET / RARITY TAGS (Optional)

Track where cards come from:

```
#set/core2021
#set/throne-of-eldraine
#set/dominaria
#rarity/common
#rarity/uncommon
#rarity/rare
#rarity/mythic
```

---

## 💰 PRICE / VALUE TAGS (Optional)

Track card values:

```
#price/budget        (Under $2)
#price/mid-range     (2-10)
#price/expensive     ($10+)
#value/reprint       (Frequently reprinted)
#value/alt-art       (Special editions)
```

---

## 🔍 Quick Tag Search Patterns

### Find All Creatures
`tag:#type/creature`

### Find All Red Creatures
`tag:#color/red` AND `tag:#type/creature`

### Find All Minotaurs in Deck
`tag:#creature-type/minotaur` AND `tag:#color/red`

### Find Ramp Spells
`tag:#role/ramp`

### Find Budget Cards
`tag:#price/budget`

---

## ✅ Tag Examples by Card

### Example 1: Rageblood Shaman
```
#color/red
#type/creature
#creature-type/minotaur
#role/lord
```

### Example 2: Kodama's Reach
```
#color/green
#type/sorcery
#role/ramp
```

### Example 3: Deus of Calamity
```
#color/red
#color/green
#type/creature
#creature-type/horror
#role/finisher
```

### Example 4: Sol Ring
```
#color/colorless
#type/artifact
#type/mana-rock
#role/ramp
#price/expensive
```

### Example 5: Arcane Signet
```
#color/colorless
#type/artifact
#type/mana-rock
#role/ramp
#price/budget
```

---

## 📝 How to Apply Tags

1. **Open card file** in Obsidian
2. **Scroll to Tags section** at bottom of template
3. **Add all relevant tags** in the format: `#category/value`
4. **Separate tags with spaces:**
   ```
   #color/red #color/green #type/creature #creature-type/minotaur
   ```
5. **Save file** - tags automatically link in Obsidian

---

## 🔗 Using Tags for Discovery

### Obsidian Tag Sidebar
- Click the **Tag icon** in Obsidian's left sidebar
- All tags automatically organize
- Click a tag to find all cards with that tag
- Use tag hierarchy: `color/red`, `role/ramp`, etc.

### Filter by Multiple Tags
- Search: `tag:#color/red AND tag:#type/creature`
- Returns all red creatures

---

## 🎨 Color Wheel Reference

```
       BLUE
        |
  WHITE | BLACK
   \    |    /
    \   |   /
      RED |
       GREEN
```

**Adjacent (Allied)** - share resources
- Red-Green, Green-White, White-Blue, Blue-Black, Black-Red

**Opposite (Enemy)** - have conflicting themes
- Red-Blue, Green-Red, White-Black, Blue-Green, Black-White

---

*Last Updated: March 6, 2026*
*For: Obsidian Magic the Gathering Card Library*
