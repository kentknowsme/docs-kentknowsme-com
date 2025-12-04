# Implementation Guide

Follow these steps to implement the updated Kent Schaeffer documentation site.

## Changes Summary

1. Replaced "kentknowsme" branding with "Kent Schaeffer" throughout
2. Updated color scheme to match portfolio (sand #D4A574, sage #7A9B76, terracotta #C67B5C)
3. Changed font to Merriweather serif
4. Updated background to dark theme (#0f1923)
5. Created portfolio page with project showcase
6. Fixed navigation links to valid routes

## File Structure

```
docs/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Updated
│   │   └── Footer.astro          # Updated
│   ├── content/
│   │   └── docs/
│   │       └── index.md          # New
│   ├── pages/
│   │   ├── index.astro           # Updated
│   │   ├── about.astro           # New
│   │   ├── contact.astro         # New
│   │   └── portfolio/
│   │       └── index.astro       # New
│   └── styles/
│       └── global.css            # Updated
├── astro.config.mjs              # Existing
├── style-guide.md                # Existing
└── README.md                     # Updated
```

## Installation Steps

### 1. Update Existing Files

Replace content in these files:

**src/styles/global.css**
- Updated color variables
- Added Merriweather font import
- Changed background to dark theme

**src/components/Header.astro**
- Changed logo from "KentKnowsMe" to "Kent Schaeffer"
- Updated hover colors to terracotta
- Added scrolled state with backdrop blur

**src/components/Footer.astro**
- Updated branding text
- Changed background to dark rgba
- Updated link hover colors

**src/pages/index.astro**
- Updated hero section buttons
- Changed portfolio link to external site

**README.md**
- Updated title references

### 2. Create New Files

**src/content/docs/index.md**
- Create this file as the documentation homepage
- Content provided in docs-index artifact

**src/pages/about.astro**
- Create new About page
- Content provided in about-page artifact

**src/pages/contact.astro**
- Create new Contact page with links
- Content provided in contact-page artifact

**src/pages/portfolio/index.astro**
- Create portfolio directory and index file
- Full portfolio showcase page
- Content provided in portfolio-index artifact

### 3. Update astro.config.mjs

No changes needed to existing config. The Starlight integration will handle docs routes automatically.

## Route Structure

After implementation, these routes will work:

- `/` - Homepage (updated index.astro)
- `/docs` - Documentation (Starlight handles this)
- `/portfolio` - Portfolio showcase page
- `/about` - About page
- `/contact` - Contact information page

External links:
- `https://kentknowsme.com` - Main portfolio site
- `https://docs.kentknowsme.com` - If hosted separately

## Color Reference

Updated CSS variables:

```css
--color-primary: #D4A574;        /* Sand */
--color-secondary: #7A9B76;       /* Sage */
--color-accent: #C67B5C;          /* Terracotta */
--color-background: #0f1923;      /* Dark midnight */
```

## Font Loading

Font loads from Bunny Fonts CDN:

```css
@import url('https://fonts.bunny.net/css?family=merriweather:400,700');
```

## Testing

After implementation:

1. Run `npm run dev`
2. Visit `localhost:4321`
3. Test all navigation links
4. Verify portfolio page loads at `/portfolio`
5. Check responsive design on mobile
6. Confirm colors match portfolio site

## Export Formats

To export documentation:

### LibreOffice
1. Copy markdown content from `src/content/docs/`
2. Open LibreOffice Writer
3. Paste and save as `.odt`

### PDF
```bash
npm run build
# Use browser print-to-PDF on built pages
```

### Plain Text
All documentation already exists as markdown files in `src/content/docs/`

## Troubleshooting

**404 errors**: Ensure all page files are in correct directories with proper file extensions (.astro, .md)

**Styles not loading**: Verify global.css import in each page layout

**Font not displaying**: Check network tab for Bunny Fonts CDN access

**Portfolio page blank**: Confirm portfolio/index.astro exists in src/pages/

## Next Steps

1. Add actual content to documentation files in `src/content/docs/`
2. Customize portfolio project images
3. Add real contact form if needed
4. Deploy to hosting platform