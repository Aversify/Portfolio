# Typography Rules – Portfolio

## Purpose

This document defines the typography system used across the portfolio website.
The goal is to ensure **consistent hierarchy, readability, and predictable scaling** across all pages and screen sizes.

All typography must follow the defined **type scale tokens**.
No arbitrary font sizes should be used.

---

# Core Principles

## 1. Use Typography Tokens Only

Font sizes must always reference the predefined tokens.

❌ Avoid

```
font-size: 23px;
font-size: 41px;
font-size: 17px;
```

✅ Use tokens

```
font-size: var(--text-sm);
font-size: var(--text-xl);
font-size: var(--text-3xl);
```

---

# Type Scale

The typography system is based on a **modular scale**.

Base font size: **1rem (16px)**
Scale ratio: **~1.25**

| Token      | Size     | Usage              |
| ---------- | -------- | ------------------ |
| --text-xs  | 0.833rem | captions, metadata |
| --text-sm  | 1rem     | body text          |
| --text-md  | 1.25rem  | intro paragraphs   |
| --text-lg  | 1.563rem | small headings     |
| --text-xl  | 1.953rem | section headings   |
| --text-2xl | 2.441rem | case titles        |
| --text-3xl | 3.052rem | page headings      |
| --text-4xl | 3.815rem | hero titles        |

---

# CSS Token Implementation

```
:root {

--text-xs: 0.833rem;
--text-sm: 1rem;
--text-md: 1.25rem;
--text-lg: 1.563rem;
--text-xl: 1.953rem;
--text-2xl: 2.441rem;
--text-3xl: 3.052rem;
--text-4xl: 3.815rem;

}
```

All typography must use these variables.

---

# Heading Hierarchy

The heading structure must follow a consistent hierarchy.

| Element | Token      |
| ------- | ---------- |
| h1      | --text-3xl |
| h2      | --text-2xl |
| h3      | --text-xl  |
| h4      | --text-lg  |
| h5      | --text-md  |
| h6      | --text-sm  |

Hero titles may use:

```
--text-4xl
```

Do not override heading sizes locally.

---

# Body Text

Standard paragraph text:

```
p {
font-size: var(--text-sm);
line-height: 1.6;
}
```

Guidelines:

* Minimum size: **1rem**
* Ideal line length: **60–75 characters**
* Maximum: **80 characters**

---

# Line Height Rules

| Type      | Line Height |
| --------- | ----------- |
| headings  | 1.2         |
| body text | 1.6         |

Example:

```
h1, h2, h3 {
line-height: 1.2;
}

p {
line-height: 1.6;
}
```

---

# Responsive Typography

Font sizes should **not be adjusted individually with media queries**.

Instead, the root font size scales globally.

```
html {
font-size: clamp(15px, 1vw + 14px, 18px);
}
```

This allows the entire typography system to scale proportionally across screen sizes.

---

# Portfolio Layout Usage

Typical hierarchy on a page:

Hero section

```
Hero Title → --text-4xl
Intro text → --text-md
```

Case section

```
Case title → --text-xl
Description → --text-sm
```

Footer

```
Metadata → --text-xs
```

---

# Do / Don't

✅ Do

* Use typography tokens
* Maintain heading hierarchy
* Keep line length readable
* Use consistent spacing

❌ Don't

* Use random font sizes
* Override heading sizes locally
* Add custom media queries for individual text elements

---

# Summary

The typography system ensures:

* consistent visual hierarchy
* predictable scaling across devices
* clean and maintainable CSS

By following these rules, the portfolio maintains a **professional and coherent design language** across all pages.
