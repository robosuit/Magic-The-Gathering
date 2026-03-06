# Creature Type Index

## 🐮 Minotaurs

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/minotaur")
SORT file.name
```

---

## 🧝 Elves

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/elf")
SORT file.name
```

---

## 🐉 Dragons

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/dragon")
SORT file.name
```

---

## 🧟 Zombies

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/zombie")
SORT file.name
```

---

## 🐺 Wolves

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/wolf")
SORT file.name
```

---

## 🧙 Wizards

```dataview
LIST
FROM "Cards"
WHERE contains(tags, "#creature-type/wizard")
SORT file.name
```

---

## All Creature Types

```dataview
LIST WITHOUT ID
FROM "Cards"
WHERE contains(tags, "#type/creature")
GROUP by tags
```
