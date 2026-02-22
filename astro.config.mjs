// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Kent Schaeffer Docs',
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
              './src/styles/astro.global.css',
          ],
          lastUpdated: true,
          sidebar: [
              { label: 'Home', link: '/' },
              {
                  label: 'Explanation',
                  autogenerate: { directory: 'explanation', collapsed: true },
              },
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides', collapsed: true },
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference', collapsed: true },
              },
              {
                  label: 'Tutorials',
                  items: [
                      {
                          label: 'Basic',
                          autogenerate: { directory: 'tutorials/basic', collapsed: true },
                      },
                      {
                          label: 'Intermediate',
                          items: [
                              {
                                  label: 'Website Tutorial',
                                  autogenerate: { directory: 'tutorials/intermediate/website', collapsed: true },

                              },
                          ],
                      },
                      {
                          label: 'Advanced',
                          autogenerate: { directory: 'tutorials/advanced', collapsed: true },
                      },
                  ],
              },
              { label: 'Services', link: '/services/' },
              { label: 'Portfolio', link: 'https://kentknowsme.com/' },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});