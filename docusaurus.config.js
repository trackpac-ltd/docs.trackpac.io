// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trackpac Docs",
  tagline:
    "Empowering IoT with Trackpac 🌐🔌 Sensors for all needs - asset tracking to environmental monitoring 📦🔍 Join the future of smart tech today!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.trackpac.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "trackpac", // Usually your GitHub org/user name.
  projectName: "docs.trackpac.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 600, // max resized image's size.
        min: 400, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/trackpac-ltd/docs.trackpac.io/tree/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social.png",
      navbar: {
        title: "Trackpac Docs",
        logo: {
          alt: "Trackpac",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://v2.trackpac.io",
            label: "Trackpac Login",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/UXQ8KyK5TF",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/trackpacio",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Trackpac",
                href: "https://trackpac.io",
              },
              {
                label: "App Login",
                href: "https://v2.trackpac.io",
              },
              {
                label: "GitHub",
                href: "https://github.com/trackpac-ltd/docs.trackpac.io/tree/main/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trackpac Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
