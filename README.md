# Magic the Gathering Card Library

Welcome to your comprehensive MTG card collection tracker!

## 📖 How to Use This Library

### Cards Folder
- Individual card files for every card in your collection
- Navigate using color, type, or creature type indexes
- Click on a card to view details and update quantities

### Tracking Inventory
Each card has a quantity marker at the top:
```
- **Quantity in Library:** [[0]]
```
Simply edit the number to track:
- Cards in your collection
- Cards assigned to decks
- Available cards (auto-calculated)

### Decks Folder
- Save your deck lists here
- Cards automatically pull from the main library
- Track which cards are being used

### Indexes
Quick navigation by:
- **Color** - Mountains (Red), Plains (White), Forests (Green), Swamps (Black), Islands (Blue), Colorless
- **Type** - Creature, Instant, Sorcery, Land, Artifact, Equipment, Enchantment, etc.
- **Creature Type** - Minotaur, Elf, Dragon, etc.

## 🏷️ Tag System

Every card uses these tags:

### Colors
- `#color/red` (Mountains)
- `#color/white` (Plains)
- `#color/green` (Forests)
- `#color/black` (Swamps)
- `#color/blue` (Islands)
- `#color/colorless`

**Multi-color cards:** Use multiple color tags
Example: `#color/red` `#color/green` for a Jund card

### Types
- `#type/creature`
- `#type/instant`
- `#type/sorcery`
- `#type/land`
- `#type/artifact`
- `#type/equipment`
- `#type/enchantment`
- `#type/planeswalker`

### Creature Types
- `#creature-type/minotaur`
- `#creature-type/elf`
- `#creature-type/dragon`
- `#creature-type/zombie`
- etc.

## 📊 Deck Building

1. Create a new deck file in the **Decks** folder
2. Link to cards you want to include: `[[Card Name]]`
3. System automatically tracks which cards are in use
4. Update main library quantities as decks change

## 🔍 Quick Tips

- Use Obsidian's search function to find cards by color, type, or name
- Use tag filters to view all creatures, all artifacts, etc.
- Hover over card links to preview card details
- Keep card images in the Cards folders for easy reference

---

**Next Steps:** Configure the index pages and start adding your cards!
