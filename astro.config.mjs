import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Kent Schaeffer Documentation',
      description: 'Technical documentation and guides by Kent Schaeffer',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/kentknowsme' },
        { icon: 'gitlab', label: 'GitLab', href: 'https://gitlab.com/kentknowsme' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/kentmschaeffer' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Guides',
          items: [
            { label: 'How-To Guides', autogenerate: { directory: 'guides/how-to' } },
            { label: 'Tutorials', autogenerate: { directory: 'guides/tutorials' } },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Explanation',
          autogenerate: { directory: 'explanation' },
        },
      ],
      customCss: [
        './src/styles/global.css',
      ],
      editLink: {
        baseUrl: 'https://github.com/dev-kentknowsme-com/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        styleOverrides: {
          borderRadius: '0.5rem',
        },
      },
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
  output: 'static',
  site: 'https://kentknowsme.com',
  base: '/',
});