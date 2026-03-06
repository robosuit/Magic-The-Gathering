# ⚡ Quick Start Guide

Get your Magic Card Library up and running in 5 minutes!

---

## 📂 Folder Structure Overview

```
Obsidian-Magic-the-Gathering-Card-Library/
├── README.md                    ← Start here
├── Tagging System Guide.md      ← Tag reference
├── Card Inventory.md            ← Master list of all cards
│
├── Cards/                       ← Individual card files
│   ├── Polukranos World Eater.md
│   ├── Deus of Calamity.md
│   └── ...
│
├── Decks/                       ← Deck build files
│   ├── Jund Minotaur-Ramp Deck.md
│   ├── Jund Token Swarm Deck.md
│   └── Minotaur Tribal Aggressive.md
│
├── Indexes/                     ← Navigation pages
│   ├── Colors.md               ← Find by color
│   ├── Types.md                ← Find by type
│   └── CreatureTypes.md        ← Find by creature type
│
└── Templates/                   ← Templates for new entries
    ├── Card Template.md         ← Copy for new cards
    └── Deck Template.md         ← Copy for new decks
```

---

## 🚀 Getting Started in 5 Steps

### Step 1: Open Obsidian
- Open your Obsidian vault
- Navigate to the `Obsidian-Magic-the-Gathering-Card-Library` folder

### Step 2: Review the Structure
- Open **README.md** for overview
- Open **Card Inventory.md** to see all tracked cards
- Open **Indexes** to see organization

### Step 3: Create Your First Card
1. Go to **Cards** folder
2. Create a new file: `[Card Name].md`
3. Copy the content from **Templates/Card Template.md**
4. Fill in the card details
5. Add appropriate tags

### Step 4: Add to Your Collection
1. Edit the `Quantity in Library` field (update the `0` to your count)
2. Save the file
3. The file will automatically appear in the appropriate indexes

### Step 5: Build a Deck
1. Go to **Decks** folder
2. Choose one of the existing deck files OR create new one
3. Link cards using: `[[Card Name]]`
4. Update the quantity markers as you assign cards to decks

---

## 📝 Creating Your First Card

### Quick Template

```markdown
# Card Name

## Card Details
- **Mana Cost:** {R}{G}
- **Type:** Creature — Horror
- **Power/Toughness:** 4/4
- **Set:** Dominaria
- **Rarity:** Rare

## Rules Text
Choose one:
• Target creature fights another target creature
• Deus of Calamity deals 3 damage to each opponent

## Inventory
- **Quantity in Library:** [[1]]
- **In Decks:** 
  - [[Jund Minotaur-Ramp Deck]]: 1
- **Available:** [[0]]

## Tags
#color/red #color/green #type/creature #creature-type/horror

## Related Cards
- [[Spawn of Thraxes]]
- [[Polukranos, World Eater]]
```

---

## 🏷️ Essential Tags

Use these core tags on every card:

### Colors (Pick all that apply)
```
#color/red      #color/white    #color/green
#color/black    #color/blue     #color/colorless
```

### Types (Pick one primary)
```
#type/creature      #type/instant       #type/sorcery
#type/enchantment   #type/artifact      #type/land
```

### Creature Types (If creature)
```
#creature-type/minotaur
#creature-type/elf
#creature-type/dragon
... (see Tagging System Guide for full list)
```

---

## 🔍 How to Find Cards

### Method 1: Use the Indexes
- Click **Colors.md** to find all cards by color
- Click **Types.md** to find cards by type
- Click **CreatureTypes.md** to find creatures by type

### Method 2: Search in Obsidian
1. Press `Ctrl+F` (Mac: `Cmd+F`) to search
2. Search by card name
3. Search by tag: `tag:#color/red`

### Method 3: Tag Sidebar
1. Click the **Tag icon** in Obsidian's left sidebar
2. Browse all tags
3. Click a tag to see all cards with that tag

---

## 📊 Managing Quantities

### In Card File
```markdown
## Inventory
- **Quantity in Library:** [[1]]  ← Change this number
- **In Decks:** 
  - [[Jund Minotaur-Ramp Deck]]: 1
- **Available:** [[0]]
```

**Change the `1` to your actual quantity:**
- `0` = Card you don't own
- `1` = One copy
- `2` = Two copies
- etc.

### In Deck File
```markdown
| [[Rageblood Shaman]] | 1 | Anthem | Core piece |
                          ↑
                    How many in this deck
```

---

## 🎛️ Three Example Decks Included

### 1. Jund Minotaur-Ramp Deck
- **Focus:** Big creatures + Minotaur synergy
- **Cards:** 100 cards (Commander format)
- **Status:** In development

### 2. Jund Token Swarm Deck
- **Focus:** Tokens + Lifelink + Overrun
- **Budget:** $60-75
- **Cards:** 60-65 cards

### 3. Minotaur Tribal Aggressive
- **Focus:** Pure Minotaur tribal
- **Command:** Neheb, the Worthy
- **Cards:** 60 cards

**To build one of these:**
1. Open the deck file
2. Go through the card list
3. Create files for any missing cards
4. Update quantities in the library

---

## 💡 Pro Tips

### Tip 1: Link Everything
Use `[[Card Name]]` to link cards between files. Hover to preview!

### Tip 2: Use Graph View
In Obsidian, open the **Graph View** to see connections between cards and decks

### Tip 3: Batch Create Cards
1. Add all cards to **Card Inventory.md**
2. When ready, click on each link
3. Create the file when Obsidian prompts you

### Tip 4: Add Pictures
You can embed card images:
```markdown
![Card Name](path/to/image.jpg)
```

### Tip 5: Use Templates
Every new card/deck? Copy from Templates folder first!

---

## 🔧 Customization

### Add Custom Fields
Edit **Templates/Card Template.md** to add fields like:
- Set Symbols
- Artist Name
- Flavor Text
- Combo Ideas
- Trade Value

### Add Custom Tags
The tagging system is completely customizable:
- Add `#format/commander`
- Add `#combo/with-X-card`
- Add `#status/need-to-buy`
- etc.

### Create Sub-Indexes
Make specialized indexes:
- Budget cards only
- Cards under 3 mana
- Cards costing less than $5
- etc.

---

## ✅ Checklist: First Day

- [ ] Open README.md and read overview
- [ ] Browse the three example decks
- [ ] Create 3-5 new card files from your collection
- [ ] Test the indexes (navigate by color/type)
- [ ] Try searching for a card
- [ ] Update quantities in 2 cards
- [ ] Explore the tag sidebar

---

## 🆘 Troubleshooting

### Cards don't appear in index?
- Make sure you added the correct **color tag**
- Make sure you added the correct **type tag**
- Indexes use Dataview plugin (Obsidian requirement)

### Links showing as broken?
- Card names must match exactly (case-sensitive)
- Use `[[Exact Card Name]]`
- If card doesn't exist, click the ? to create it

### Can't see tags?
- Click the **Tag icon** in Obsidian's left sidebar
- Or search with: `tag:#your-tag-name`

### Need more card info?
- Add to Flavor Text section
- Add to Notes section
- Add to Related Cards section

---

## 📞 Next Steps

1. **Build your collection** - Create files for all your cards
2. **Update quantities** - Mark how many of each you own
3. **Assign to decks** - Link cards to your deck files
4. **Track trades** - Add `#status/for-trade` to cards you'd trade
5. **Expand decks** - Use the examples as starting points

---

## 📚 Related Files

- **Tagging System Guide.md** - Complete reference for all tags
- **Card Inventory.md** - Master list of all cards from conversation
- **Templates/Card Template.md** - Copy this for every new card
- **Decks/Jund Minotaur-Ramp Deck.md** - Detailed example deck

---

**Happy deck building! 🎉**

*Last Updated: March 6, 2026*
