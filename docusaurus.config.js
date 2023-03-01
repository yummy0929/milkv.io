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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
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
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'My Site',
          src: 'img/ICON.svg',
        },
        items: [
          {
            label: 'Home',
            position: 'right',
            to: '/'
          },
          {
            label: 'DUO',
            to: '/details',
            position: 'right',

          },
          {
            position: 'right',
            label: 'Pioneer',
            to: '/center'
          },
          {
            type: 'dropdown',
            label: 'Doc',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'DUO',
                docId: 'DUOProductBriefv1.1/Duo Product Brief v1.1',
              },
              {
                type: 'doc',
                label: 'Pioneer',
                docId: 'PioneerProductBriefv1.0/Pioneer Product Brief v1.0',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          src: 'img/ICON.svg',
          style: {
          }
        },
        links: [
          {
            html: `<div class="footer_text1" style="color:#2D88C9;">Milk-V</div>`
          },
          {
            html: `<div class="footer_text3" style="color:#2D88C9;">Email：support@milkv.io</div>`
          }
        ],
      },
    }),
};

module.exports = config;
