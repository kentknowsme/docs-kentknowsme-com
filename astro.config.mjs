// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
	  		sidebar: [
				{
					label: 'Explanation',
					autogenerate: { directory: 'explanation' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' }
				},
			],
		}),
	],
});
