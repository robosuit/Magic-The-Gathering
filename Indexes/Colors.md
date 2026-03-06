# Color Index

## 🔴 Red (Mountains)

### All Red Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/red")
SORT file.name
```

---

## ⚪ White (Plains)

### All White Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/white")
SORT file.name
```

---

## 🌲 Green (Forests)

### All Green Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/green")
SORT file.name
```

---

## ⚫ Black (Swamps)

### All Black Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/black")
SORT file.name
```

---

## 🔵 Blue (Islands)

### All Blue Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/blue")
SORT file.name
```

---

## ⊘ Colorless

### All Colorless Cards
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/colorless")
SORT file.name
```

---

## 🌈 Multi-Color Combinations

### Red/Green (Gruul)
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/red") AND contains(tags, "#color/green")
SORT file.name
```

### Red/Black (Rakdos)
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/red") AND contains(tags, "#color/black")
SORT file.name
```

### Black/Green (Golgari)
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/black") AND contains(tags, "#color/green")
SORT file.name
```

### Red/Green/Black (Jund)
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/red") AND contains(tags, "#color/green") AND contains(tags, "#color/black")
SORT file.name
```

### White/Blue/Green (Bant)
```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#color/white") AND contains(tags, "#color/blue") AND contains(tags, "#color/green")
SORT file.name
```
