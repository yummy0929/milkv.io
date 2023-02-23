// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MilkV',
  tagline: 'Everything about RISC-V',
  // 站点图标
  favicon: 'img/favicon.ico',

  // 你的网站URL（所创建的github仓库名）
  url: 'https://milk-v.github.io',
  baseUrl: '/milkv.io/',
  // github账户名
  organizationName: 'milk-v', 
  // 刚所创建的github仓库名
  projectName: 'milkv.io',


  // 死链处理
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
      navbar: {
        style:'dark',
        hideOnScroll:true,
        logo: {
          alt: 'My Site',
          src: 'img/ICON.svg',
          style:{
            width:'63px',
            height:'18px',
            margin:'5.5px 0 0 10px',
          },
          // href:"http://localhost:3000/",
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            dropdownItemsAfter: [{to: '/docs/intro', label: '下拉1'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            // docId: 'intro',
            position: 'right',
            label:'Community',
            dropdownItemsAfter: [{to: '/', label: '下拉1'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'html',
            position: 'right',
            value: `<button style="border-radius:5px;padding:5px;">
              <a href="http://baidu.com" style="color:#2D88C9" >Online shop</a>
            </button>
            `
          },
        ],
      },
      footer: {
        style: 'dark',
        logo:{
          src: 'img/ICON.svg',
        },
        links: [
          {
            title: 'footer1',
            items: [
              {
                label: 'A链接',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'footer2',
            items: [
              {
                label: 'B链接',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'C链接',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'D链接',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'footer3',
            items: [
              {
                label: 'E链接',
                to: '/blog',
              },
              {
                label: 'E链接',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
