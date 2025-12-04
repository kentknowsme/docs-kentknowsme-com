import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Kent Schaeffer Documentation',
      description: 'Technical documentation and guides by Kent Schaeffer',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/kentknowsme' },
        { icon: 'gitlab', label: 'GitLab', href: 'https://gitlab.com/kentknowsme' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/kentmschaeffer' },
      ],
      customCss: [
        './src/styles/global.css',
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', link: '/docs/' },
            { label: 'Getting Started', link: '/docs/getting-started/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Tutorials',
              collapsed: false,
              autogenerate: { directory: 'guides/tutorials' },
            },
            {
              label: 'How-To Guides',
              collapsed: false,
              autogenerate: { directory: 'guides/how-to' },
            },
          ],
        },
        {
          label: 'Reference',
          collapsed: false,
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Explanation',
          collapsed: false,
          autogenerate: { directory: 'explanation' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/docs-kentknowsme-com/edit/main/',
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
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.bunny.net',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.bunny.net/css?family=merriweather:400,700',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          },
        },
      ],
      contentDir: 'src/content'
    }),
  ],
  output: 'static',
  site: 'https://docs.kentknowsme.com',
  base: '/',
});