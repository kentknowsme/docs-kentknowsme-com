# Starlight Documentation Setup Guide

Complete guide to building out your Starlight documentation site.

## Directory Structure

Create this exact structure in your project:

```
docs/
└── src/
    └── content/
        └── docs/
            ├── index.md                        (Home/Splash page)
            ├── getting-started.md              (Getting started guide)
            ├── guides/
            │   ├── tutorials/
            │   │   ├── web-basics.md
            │   │   ├── bash-scripting.md
            │   │   └── javascript-basics.md
            │   └── how-to/
            │       ├── dns-setup.md
            │       ├── deploy-site.md
            │       └── email-security.md
            ├── reference/
            │   ├── commands.md
            │   ├── dns-commands.md
            │   └── api-reference.md
            └── explanation/
                ├── dns-architecture.md
                ├── sysadmin-practices.md
                └── architecture.md
```

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install @astrojs/starlight
```

### 2. Update Configuration

Replace your `astro.config.mjs` with the updated version from the `astro-config` artifact.

Key features enabled:
- Sidebar with Diataxis structure
- Search functionality (built-in)
- Edit links to GitHub
- Last updated timestamps
- Syntax highlighting with GitHub themes
- Custom CSS integration

### 3. Create Content Directories

```bash
cd src/content/docs
mkdir -p guides/{tutorials,how-to}
mkdir -p reference
mkdir -p explanation
```

### 4. Add Content Files

Copy the example files from these artifacts:
- `docs-intro` → `src/content/docs/index.md`
- `getting-started-doc` → `src/content/docs/getting-started.md`
- `tutorial-example` → `src/content/docs/guides/tutorials/web-basics.md`
- `howto-example` → `src/content/docs/guides/how-to/dns-setup.md`
- `reference-example` → `src/content/docs/reference/commands.md`
- `explanation-example` → `src/content/docs/explanation/dns-architecture.md`

### 5. Understand Frontmatter

Each markdown file needs YAML frontmatter:

```yaml
---
title: Page Title                    # Required
description: Page description        # Required
sidebar:
  order: 1                           # Optional: Control sidebar order
  label: Custom Label                # Optional: Override title in sidebar
  badge: New                         # Optional: Add badge
---
```

### 6. How Starlight Routing Works

Starlight automatically creates routes from your file structure:

```
File: src/content/docs/guides/tutorials/web-basics.md
URL:  /docs/guides/tutorials/web-basics/

File: src/content/docs/reference/commands.md
URL:  /docs/reference/commands/

File: src/content/docs/index.md
URL:  /docs/
```

**Important**: The `/docs` prefix comes from Starlight integration.

### 7. Sidebar Configuration

Your `astro.config.mjs` controls the sidebar:

```javascript
sidebar: [
  {
    label: 'Start Here',           // Sidebar section
    items: [
      { 
        label: 'Introduction',      // Link text
        link: '/docs/'              // Must match URL
      },
    ],
  },
  {
    label: 'Guides',
    items: [
      {
        label: 'Tutorials',
        collapsed: false,           // Expand by default
        autogenerate: {            // Auto-generate from folder
          directory: 'guides/tutorials'
        },
      },
    ],
  },
]
```

**Autogenerate**: Starlight automatically creates sidebar entries for all `.md` files in that directory.

## Content Features

### Starlight Components

Use built-in components for rich content:

```mdx
---
title: Example Page
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Feature 1" icon="star">
    Description here
  </Card>
  <Card title="Feature 2" icon="rocket">
    Another description
  </Card>
</CardGrid>
```

**Available Icons**: `star`, `rocket`, `document`, `information`, `open-book`, `puzzle`, etc.

### Callouts/Admonitions

Create highlighted boxes:

```markdown
:::note
This is a note callout
:::

:::tip
Pro tip goes here
:::

:::caution
Be careful about this
:::

:::danger
Warning: This is dangerous
:::
```

### Code Blocks

Enhanced syntax highlighting:

````markdown
```javascript title="example.js"
function hello() {
  console.log("Hello!");
}
```
````

**Features**:
- Line numbers
- Filename display
- Syntax highlighting
- Copy button (automatic)

### Tabs

Create tabbed content:

```mdx
import { Tabs, TabItem } from '@astrojs/starlight/components';

<Tabs>
  <TabItem label="npm">
    ```bash
    npm install package
    ```
  </TabItem>
  <TabItem label="yarn">
    ```bash
    yarn add package
    ```
  </TabItem>
</Tabs>
```

## Customizing Your Docs

### Override Default Components

Starlight allows overriding components. In `astro.config.mjs`:

```javascript
components: {
  Header: './src/components/Header.astro',
  Footer: './src/components/Footer.astro',
}
```

**Note**: This replaces Starlight's default header/footer.

### Custom CSS

Your `global.css` is already included via `customCss` in config:

```javascript
customCss: [
  './src/styles/global.css',
],
```

### Custom Pages

Mix Starlight docs with custom pages:

```
src/
├── content/
│   └── docs/          # Starlight docs
└── pages/
    ├── index.astro    # Custom homepage
    ├── portfolio/
    ├── about.astro
    └── contact.astro
```

## Development Workflow

### Run Dev Server

```bash
npm run dev
```

Visit: `http://localhost:4321/docs/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding New Content

### Add a New Tutorial

1. Create file: `src/content/docs/guides/tutorials/my-tutorial.md`

2. Add frontmatter:
```yaml
---
title: My Tutorial Title
description: What this tutorial teaches
sidebar:
  order: 2
---
```

3. Write content using markdown

4. It automatically appears in sidebar under "Tutorials"

### Add a New Reference Page

1. Create: `src/content/docs/reference/my-reference.md`

2. Frontmatter:
```yaml
---
title: My Reference
description: Quick reference guide
---
```

3. Appears automatically in "Reference" section

## Search

Search is automatically enabled! Press `Ctrl+K` (or `Cmd+K`):

- Searches all documentation content
- Shows results with context
- Keyboard navigable
- No configuration needed

## Navigation Features

### Breadcrumbs
Automatic based on file structure

### Pagination
"Previous" and "Next" links automatically generated

### Table of Contents
Right sidebar shows all headings (H2-H4)

### Edit This Page
Links to GitHub (configure `editLink.baseUrl`)

## SEO and Metadata

### Per-Page SEO

Frontmatter controls:
```yaml
---
title: Page Title            # <title> tag
description: Description     # Meta description
---
```

### Site-Wide SEO

In `astro.config.mjs`:
```javascript
starlight({
  title: 'Site Title',
  description: 'Site description',
  social: {
    github: 'url',
    linkedin: 'url',
  },
})
```

## Deployment

### Build Output

```bash
npm run build
```

Creates `dist/` folder with static HTML.

### Deploy To

- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Netlify**: Connect repo, build command: `npm run build`
- **Vercel**: Import project, auto-detects Astro
- **Cloudflare Pages**: Connect repo, build: `npm run build`, output: `dist`

### Base URL

If deploying to subdirectory:

```javascript
export default defineConfig({
  base: '/docs/',  // For example.com/docs/
  // ...
});
```

## Troubleshooting

### Docs not showing

**Check**:
1. Files in `src/content/docs/`?
2. Frontmatter includes `title` and `description`?
3. Sidebar config matches file paths?
4. Dev server running?

### Sidebar not updating

**Solutions**:
1. Restart dev server
2. Check `autogenerate` directory path
3. Verify file has proper frontmatter

### Custom CSS not applying

**Check**:
1. File path in `customCss` correct?
2. CSS variables defined in `:root`?
3. Browser cache cleared?

### 404 on routes

**Check**:
1. File structure matches expected URLs
2. Files have `.md` extension
3. Frontmatter is valid YAML

## Next Steps

1. **Content**: Copy example files and customize
2. **Customize**: Adjust colors in `global.css`
3. **Add More**: Create additional tutorials, guides, references
4. **Deploy**: Choose hosting platform and deploy

## Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build/)
- [Diataxis Framework](https://diataxis.fr/)
- [Example Files in Artifacts](#)

Your documentation site will look like the Starlight examples with your custom branding and colors!