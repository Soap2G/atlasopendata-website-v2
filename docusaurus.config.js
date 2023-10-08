// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ATLAS Open Data Documentation',
  tagline: 'Documentation for ATLAS Open Data.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
    url: 'https://soap2g.github.io', // Your website URL
  baseUrl: '/atlasopendata',
  projectName: 'soapw2g.github.io',
  organizationName: 'Soap2G',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    /*'docusaurus-plugin-matomo',
    require.resolve("docusaurus-plugin-image-zoom"),
    
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    */
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      // Replace with your project's social card
      image: 'img/atlas_logo.png',
      navbar: {
        title: 'ATLAS Open Data Documentation',
        logo: {
          alt: 'ATLAS Open Data Documentation',
          src: 'img/atlas_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'data13',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'docSidebar',
            sidebarId: 'data13',
            position: 'left',
            label: '13 TeV Open Datasets',
          },
          {
            type: 'docSidebar',
            sidebarId: 'physicsexamples',
            position: 'left',
            label: 'Physics analysis examples',
          },
          {
            href: 'https://github.com/atlas-outreach-data-tools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Something',
                to: '/docs',
              },
              {
                label: 'Something else',
                to: '/docs',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'The ATLAS website',
                href: 'https://atlas.cern/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ATLASexperiment',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/atlasexperiment',
              },
            ],
          },          
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/atlas-outreach-data-tools',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.cern.ch/atlas-outreach-data-tools',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/atlasexperiment',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ATLAS Collaboration. Built with Docusaurus.`,        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
      },
    }),
};

module.exports = config;
