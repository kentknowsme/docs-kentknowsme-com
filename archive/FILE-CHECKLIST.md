# File Download Checklist

Use this checklist to ensure all files are downloaded and placed correctly.

## ✅ Download Checklist

### Layouts (1 file)
- [ ] `src/layouts/BaseLayout.astro` - **NEW**
  - Artifact: `base-layout`
  - Handles font loading for entire site

### Components (2 files)
- [ ] `src/components/Header.astro` - UPDATED
  - Artifact: `header-component`
  - Updated branding and colors
  
- [ ] `src/components/Footer.astro` - UPDATED
  - Artifact: `footer-component`
  - Updated branding and colors

### Styles (1 file)
- [ ] `src/styles/global.css` - UPDATED
  - Artifact: `global-css`
  - Portfolio colors, Merriweather font, dark theme

### Pages (4 files)
- [ ] `src/pages/index.astro` - UPDATED
  - Artifact: `index-astro`
  - Homepage with BaseLayout
  
- [ ] `src/pages/portfolio/index.astro` - **NEW**
  - Artifact: `portfolio-index`
  - Portfolio showcase page
  
- [ ] `src/pages/about.astro` - **NEW**
  - Artifact: `about-page`
  - About page
  
- [ ] `src/pages/contact.astro` - **NEW**
  - Artifact: `contact-page`
  - Contact page

### Content (1 file)
- [ ] `src/content/docs/index.md` - **NEW**
  - Artifact: `docs-index`
  - Documentation homepage

### Configuration (2 files)
- [ ] `astro.config.mjs` - EXISTING
  - Artifact: `astro-config`
  - Starlight configuration
  
- [ ] `style-guide.md` - NEW
  - Artifact: `style-guide-md`
  - Content writing guide

### Documentation (3 files)
- [ ] `README.md` - UPDATED
  - Artifact: `readme-setup`
  - Project overview
  
- [ ] `DOWNLOAD-GUIDE.md` - **NEW**
  - Artifact: `download-guide`
  - This guide!
  
- [ ] `IMPLEMENTATION.md` - NEW (Optional)
  - Artifact: `implementation-guide`
  - Detailed implementation steps

## Total Files to Download: 14

**NEW files:** 8
**UPDATED files:** 5
**EXISTING (no changes):** 1

## Quick Copy Reference

| Artifact Name | File Path | Status |
|--------------|-----------|--------|
| `base-layout` | `src/layouts/BaseLayout.astro` | NEW |
| `global-css` | `src/styles/global.css` | UPDATED |
| `header-component` | `src/components/Header.astro` | UPDATED |
| `footer-component` | `src/components/Footer.astro` | UPDATED |
| `index-astro` | `src/pages/index.astro` | UPDATED |
| `portfolio-index` | `src/pages/portfolio/index.astro` | NEW |
| `about-page` | `src/pages/about.astro` | NEW |
| `contact-page` | `src/pages/contact.astro` | NEW |
| `docs-index` | `src/content/docs/index.md` | NEW |
| `astro-config` | `astro.config.mjs` | EXISTING |
| `style-guide-md` | `style-guide.md` | NEW |
| `readme-setup` | `README.md` | UPDATED |
| `download-guide` | `DOWNLOAD-GUIDE.md` | NEW |
| `implementation-guide` | `IMPLEMENTATION.md` | NEW |

## Verification Steps

After downloading all files:

1. [ ] Run `npm install`
2. [ ] Run `npm run dev`
3. [ ] Visit `http://localhost:4321/`
4. [ ] Click through all navigation links
5. [ ] Verify Merriweather font is displaying
6. [ ] Check colors match portfolio (sand/sage/terracotta)
7. [ ] Test responsive design on mobile

## Success Indicators

✅ Font displays as Merriweather serif
✅ Colors are sand (#D4A574), sage (#7A9B76), terracotta (#C67B5C)
✅ Background is dark (#0f1923)
✅ All navigation links work (no 404s)
✅ Portfolio page shows 8 items and timeline
✅ Header shows "Kent Schaeffer" not "KentKnowsMe"
✅ Footer has dark background with updated branding

## Quick Start Command

```bash
# After all files are in place
npm install && npm run dev
```

Visit: `http://localhost:4321`