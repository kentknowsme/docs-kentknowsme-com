# Kent Schaeffer Documentation Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```


## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).


## Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm or pnpm package manager

### Setup Steps

1. Initialize the Astro project:

```bash
npm create astro@latest docs
cd docs
```

2. Install Starlight integration:

```bash
npx astro add starlight
```

3. Copy the provided files into their respective locations:
   - `astro.config.mjs` → `docs/astro.config.mjs`
   - `global.css` → `docs/src/styles/global.css`
   - `Header.astro` → `docs/src/components/Header.astro`
   - `Footer.astro` → `docs/src/components/Footer.astro`
   - `index.astro` → `docs/src/pages/index.astro`
   - `style-guide.md` → `docs/style-guide.md`

4. Create the content directory structure:

```bash
mkdir -p src/content/docs/{getting-started,guides/{how-to,tutorials},reference,explanation}
```

5. Install dependencies:

```bash
npm install
```

6. Start the development server:

```bash
npm run dev
```

## Available Commands

- `npm run dev` - Start development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Content Organization

Documentation follows the Diataxis framework with four content types:

### Tutorials
Learning-oriented guides for newcomers. Place in `src/content/docs/guides/tutorials/`.

Example: `getting-started-with-dns.md`

### How-To Guides
Task-oriented problem-solving guides. Place in `src/content/docs/guides/how-to/`.

Example: `configure-dns-records.md`

### Reference
Information-oriented technical specifications. Place in `src/content/docs/reference/`.

Example: `api-reference.md`

### Explanation
Understanding-oriented conceptual content. Place in `src/content/docs/explanation/`.

Example: `dns-architecture.md`

## Writing Documentation

Refer to `style-guide.md` for comprehensive content standards covering:

- Voice and tone
- Grammar and mechanics
- Code formatting
- Terminology
- Accessibility

### Creating New Pages

Create markdown files in the appropriate content directory:

```markdown
---
title: Your Page Title
description: Brief description for SEO and navigation
---

# Your Page Title

Your content here...
```

### Using Components

Import and use components in MDX files:

```mdx
---
title: Example Page
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Feature 1" icon="star">
    Description here
  </Card>
</CardGrid>
```

## Styling

Global styles are defined in `src/styles/global.css` with CSS custom properties for:

- Color palette
- Typography
- Spacing scale
- Layout constraints
- Component styles

Customize variables in `:root` to adjust the design system.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Hosting

The site builds to static HTML. Deploy the `dist/` directory to:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

### GitHub Pages Example

```bash
npm run build
# Push dist/ to gh-pages branch
```

## File Formats for Export

All documentation can be exported in multiple formats:

### LibreOffice
1. Copy markdown content
2. Open LibreOffice Writer
3. Paste and save as `.odt`

### Plain Text
Documentation files are already in markdown (plain text format)

### PDF
1. Build the site: `npm run build`
2. Use browser print-to-PDF on generated pages
3. Or use pandoc: `pandoc file.md -o file.pdf`

## Configuration

### Site Metadata

Edit `astro.config.mjs` to update:
- Site title
- Description
- Social links
- Sidebar navigation
- Theme colors

### Header/Footer

Customize navigation and links in:
- `src/components/Header.astro`
- `src/components/Footer.astro`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with CSS Grid support

## License

Content and code are proprietary. Refer to individual project licenses.

## Support

Technical issues: Open an issue in the project repository
Content questions: Refer to `style-guide.md`

## Style Guides Used

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)
- [Diataxis Framework](https://diataxis.fr)
- [Mailchimp Style Guide](https://styleguide.mailchimp.com)