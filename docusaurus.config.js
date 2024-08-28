// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Kids on Computers',
    tagline: 'Bringing technology to underprivileged kids worldwide',
    url: 'https://kidsoncomputers.github.io',
    // Change the following line to '/' from '/website/' based on Docusaurus error 
    // recommendation on 2024/08/28
    baseUrl: '/website/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'kidsoncomputers', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: './labs',
                    routeBasePath: 'labs',
                    sidebarPath: require.resolve('./sidebarLabs.js'),
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'about',
            path: 'about',
            routeBasePath: 'about',
            sidebarPath: require.resolve('./sidebarAbout.js'),
            // ... other options
          },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
              id: 'involved',
              path: 'get-involved',
              routeBasePath: 'get-involved',
              sidebarPath: require.resolve('./sidebarInvolved.js'),
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Kids on Computers',
                logo: {
                    alt: 'Kids on Computers',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introLabs',

                        position: 'left',
                        label: 'Labs',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    { 
                        type: 'doc',
                        docId: 'introInvolved',
                        docsPluginId: 'involved',
                        position: 'left', 
                        label: 'Get Involved', 
                    },
                    { to: '/documentation', label: 'Documentation', position: 'left' },
                    {
                        type: 'doc',
                        docId: 'introAbout',
                        docsPluginId: 'about',
                        position: 'right',
                        label: 'About',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/kidsoncomputers',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/kidsoncomputers',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Contact Us',
                                href: 'mailto:info@kidsoncomputers.org',
                            },
                            {
                                label: 'KoC PayPal Giving Fund',
                                href: 'https://www.paypal.com/us/fundraiser/charity/1477257',
                            },
                            {
                                label: 'KoC on Charity Navigator',
                                href: 'https://www.charitynavigator.org/ein/264329360',
                            },
                        ],
                    },

                    
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Kids on Computers`,
            },
            prism: {
                theme: prismThemes.palenight,
                darkTheme: prismThemes.dracula,
            },
        }),
};

module.exports = config;
