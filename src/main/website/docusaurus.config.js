/*
 * Copyright (c) 2020-2023 Datamixin.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
require('dotenv').config();

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");
const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");

/** @type {import('@docusaurus/types').Config} */
const config = {

  // Product
  title: 'Datamixin',
  tagline: 'Productive Data Science Application',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.datamixin.com',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'datamixin', // Usually your GitHub org/user name.
  projectName: 'datamixin-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      id: {
        htmlLang: 'id-ID',
      },
    },
  },

  customFields: {

    // Put your custom environment here
    appsUrl: process.env.APPS_URL,
    consoleUrl: process.env.CONSOLE_URL,
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
          // editUrl: 'https://gitlab.com/-/ide/project/skuadron45/mixin-prediction/edit/master/-/mixin-padang-website/src/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://gitlab.com/-/ide/project/skuadron45/mixin-prediction/edit/master/-/mixin-padang-website/src/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-8SB9QNYF1L',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Color
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },

      // Replace with your project's social card
      image: 'img/datamixin-daemon.jpg',
      navbar: {
        title: 'Datamixin',
        logo: {
          alt: 'Production data science tools',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            label: 'Docs',
            position: 'left',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            type: 'dropdown',
            label: 'Demo',
            position: 'right',
            items: [
              {
                label: 'Datamixin Datawork',
                href: process.env.APPS_URL,
              },
            ]
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
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/datamixin',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/datamixin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datamixin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datamixin.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
