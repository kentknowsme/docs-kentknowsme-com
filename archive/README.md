# Kent Schaeffer Documentation Site

## Project Summary

This is a documentation project site constructed by [Kent Schaeffer](https://kentknowsme.com) to share documentation examples as part of his portfolio and technical documentation abilities. This site was [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) and other [technologies](#build-technologies)


## Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm or pnpm package manager

### Install

```bash
npm create astro@latest -- --template starlight
```

### Create Folders
```bash
mkdir -p src/content/docs/{getting-started,guides/{how-to,tutorials},reference,explanation}
```

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

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

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

Create markdown files in the appropriate `content` directory:

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

## Build Technologies

### Frameworks

|||
|---------------------|---------------------------------------------------------------------------|
| **Astro**            | [![Astro](https://img.shields.io/badge/Astro-FF5A00.svg)](https://astro.build/)
| **Built with Starlight** | [![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) |

### Languages and Tools

|||
|---------------------|---------------------------------------------------------------------------|
| **JavaScript**      | [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg)](https://www.citizendium.org/courses/programming_languages.html) |
| **Node.js**         | [![Node.js](https://img.shields.io/badge/Node.js-339933.svg)](https://www.citizendium.org/courses/programming_languages.html) |
| **brew**            | [![Homebrew](https://img.shields.io/badge/Homebrew-FFB300.svg)](https://brew.sh/) |
| **npm**             | [![npm](https://img.shields.io/badge/npm-CB3837.svg)](https://www.npmjs.com/) |
| **Zsh**             | [![Zsh](https://img.shields.io/badge/Zsh-100000.svg)](https://www.zsh.org/)                                      |

### Platforms

|||
|---------------------|--------------------------------------------------------------------------|
| **macOS**           | [![macOS](https://img.shields.io/badge/macOS-000000.svg)](https://www.apple.com/macos/) |
| **GitHub**          | [![GitHub](https://img.shields.io/badge/GitHub-181717.svg)](https://github.com/)  |
| **Cloudflare**          | [![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020.svg)](https://www.cloudflare.com)                   |

### Document Formats

|||
|---------------------|---------------------------------------------------------------------------|
| **Astro**            | [![Astro](https://img.shields.io/badge/Astro-FF5A00.svg)](https://astro.build/) |
| **HTML**            | [![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)   |
| **CSS**             | [![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)         |
| **JavaScript**      | [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/publications/standards/Ecma-262.htm) |
| **Markdown**       | [![Markdown](https://img.shields.io/badge/Markdown-000000.svg)](https://daringfireball.net/projects/markdown/) |
| **SVG**             | [![SVG](https://img.shields.io/badge/SVG-000000.svg)](https://www.w3.org/Graphics/SVG/)  |


## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)
- [Diataxis Framework](https://diataxis.fr)
- [Mailchimp Style Guide](https://styleguide.mailchimp.com)