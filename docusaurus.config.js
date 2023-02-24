// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MilkV',
  tagline: 'Everything about RISC-V',
  favicon: 'img/favicon.ico',
  url: 'https://milkv.io',
  baseUrl: '/',
  organizationName: 'milk-v', 
  projectName: 'milkv.io',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      disableDarkModeSwitch: true,
      disableThemeDesignSwitch: true,
      navbar: {
        hideOnScroll:true,
        logo: {
          alt: 'My Site',
          src: 'img/ICON.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'product',
            position: 'right',
            items: [
              {
                label: 'Facebook',
                href: '/#',
              },
              {
                label: 'Facebook',
                href: '/#',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'Facebook',
                href: '/#',
              },
              {
                label: 'Facebook',
                href: '/#',
              },
              // ... more items
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        logo:{
          src: 'img/ICON.svg',
          style:{
          }
        },
        links: [
          {
            html:`<div class="footer_text1" style="color:#2D88C9;">Milk-V Machines</div>`
          },
          {
            html:`<div class="footer_text2" style="color:#2D88C9;">China mainland call：(86) 0755-2778-4863</div>`
          },
          {
            html:`<div class="footer_text3" style="color:#2D88C9;">Email：Contact@ .io</div>`
          }
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      
    }),
};

module.exports = config;
