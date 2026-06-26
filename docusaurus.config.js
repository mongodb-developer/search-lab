// @ts-check

const workshopName = 'search-lab';
const organizationName = "mongodb-developer";

const title = "MongoDB Search Lab";
const tagLine = "Hands-on lab for MongoDB Atlas Search, Vector Search, and Hybrid Search";
const favicon = "img/favicon.svg";

// Footer links
const footerLinks = [
  {
    label: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    label: "MongoDB Skills",
    href: "https://learn.mongodb.com/skills",
  },
  {
    label: "MongoDB Developers YouTube",
    href: "https://www.youtube.com/@MongoDBDevelopers",
  },
  {
    label: "This Lab in GitHub",
    href: `https://github.com/${organizationName}/${workshopName}`,
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: `${organizationName}.github.io`,
  organizationName: `${organizationName}`,
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: `${favicon}`,
  deploymentBranch: "gh-pages",
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: `${title}`,
        logo: {
          alt: "MongoDB Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
