# Complete File Download Guide

All files ready for download and implementation. Follow this guide to set up your Kent Schaeffer documentation site.

## Directory Structure

Create this folder structure in your project:

```
docs/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── docs/
│   │       └── index.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── portfolio/
│   │       └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── style-guide.md
├── README.md
└── package.json
```

## Files to Download

### 1. Core Layout Files

#### `src/layouts/BaseLayout.astro` (NEW)
**Location:** Create `src/layouts/` directory, save as `BaseLayout.astro`
**Purpose:** Base layout with font loading for all pages
**Download from:** Artifact `base-layout`

#### `src/styles/global.css` (UPDATED)
**Location:** `src/styles/global.css`
**Purpose:** Global styles with portfolio color scheme and Merriweather font
**Download from:** Artifact `global-css`

### 2. Component Files

#### `src/components/Header.astro` (UPDATED)
**Location:** `src/components/Header.astro`
**Purpose:** Navigation header with "Kent Schaeffer" branding
**Download from:** Artifact `header-component`

#### `src/components/Footer.astro` (UPDATED)
**Location:** `src/components/Footer.astro`
**Purpose:** Footer with updated branding and colors
**Download from:** Artifact `footer-component`

### 3. Page Files

#### `src/pages/index.astro` (UPDATED)
**Location:** `src/pages/index.astro`
**Purpose:** Homepage with hero section and expertise showcase
**Download from:** Artifact `index-astro`

#### `src/pages/portfolio/index.astro` (NEW)
**Location:** Create `src/pages/portfolio/` directory, save as `index.astro`
**Purpose:** Portfolio showcase page with projects timeline
**Download from:** Artifact `portfolio-index`

#### `src/pages/about.astro` (NEW)
**Location:** `src/pages/about.astro`
**Purpose:** About page
**Download from:** Artifact `about-page`

#### `src/pages/contact.astro` (NEW)
**Location:** `src/pages/contact.astro`
**Purpose:** Contact page with links
**Download from:** Artifact `contact-page`

### 4. Content Files

#### `src/content/docs/index.md` (NEW)
**Location:** Create `src/content/docs/` directory, save as `index.md`
**Purpose:** Documentation homepage
**Download from:** Artifact `docs-index`

### 5. Configuration Files

#### `astro.config.mjs` (UPDATED)
**Location:** Root directory `astro.config.mjs`
**Purpose:** Astro and Starlight configuration
**Download from:** Artifact `astro-config`

#### `style-guide.md` (NEW)
**Location:** Root directory `style-guide.md`
**Purpose:** Content style guide following Diataxis
**Download from:** Artifact `style-guide-md`

### 6. Documentation Files

#### `README.md` (UPDATED)
**Location:** Root directory `README.md`
**Purpose:** Project setup and documentation
**Download from:** Artifact `readme-setup`

#### `IMPLEMENTATION.md` (NEW - OPTIONAL)
**Location:** Root directory `IMPLEMENTATION.md`
**Purpose:** Detailed implementation instructions
**Download from:** Artifact `implementation-guide`

## Quick Installation Steps

### Step 1: Create Directory Structure
```bash
cd docs
mkdir -p src/{components,layouts,pages/portfolio,content/docs,styles}
```

### Step 2: Download and Save Files

Copy each artifact content and save to the corresponding file path listed above.

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Verify Routes

Visit these URLs to confirm everything works:
- `http://localhost:4321/` - Homepage
- `http://localhost:4321/portfolio` - Portfolio page
- `http://localhost:4321/about` - About page
- `http://localhost:4321/contact` - Contact page
- `http://localhost:4321/docs` - Documentation (Starlight)

## Key Features Implemented

✅ Merriweather font loaded via BaseLayout
✅ Portfolio color scheme (sand, sage, terracotta)
✅ Dark background theme (#0f1923)
✅ "Kent Schaeffer" branding throughout
✅ Working navigation links
✅ Portfolio showcase page
✅ Responsive design
✅ Accessibility features

## Font Loading Solution

The BaseLayout component handles font loading by including:
```html
<link rel="preconnect" href="https://fonts.bunny.net">
<link href="https://fonts.bunny.net/css?family=merriweather:400,700" rel="stylesheet">
```

Every page now uses BaseLayout, so fonts load automatically without repetition.

## Color Variables Reference

```css
--color-primary: #D4A574;        /* Sand */
--color-secondary: #7A9B76;       /* Sage */
--color-accent: #C67B5C;          /* Terracotta */
--color-background: #0f1923;      /* Dark midnight */
```

## Troubleshooting

**Font not loading?**
- Verify BaseLayout.astro exists in `src/layouts/`
- Check all page imports point to correct BaseLayout path
- Clear browser cache

**404 errors?**
- Ensure file structure matches exactly
- Verify portfolio directory: `src/pages/portfolio/index.astro`
- Restart dev server after creating new files

**Styles not applying?**
- Confirm global.css is in `src/styles/`
- Check BaseLayout imports global.css
- Verify CSS custom properties are defined

## Next Steps

1. Add your own content to documentation files
2. Customize portfolio project details
3. Add actual images to portfolio items
4. Configure Starlight sidebar in astro.config.mjs
5. Deploy to your hosting platform

## Export Formats

**LibreOffice:** Copy markdown content, paste in Writer, save as .odt
**PDF:** Run `npm run build`, use browser print-to-PDF
**Plain Text:** All markdown files in `src/content/docs/`

## Support

Refer to implementation guide for detailed setup instructions or troubleshooting assistance.