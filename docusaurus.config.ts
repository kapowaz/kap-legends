import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KAP Legend System',
  tagline:
    'A modern and versatile set of legends for custom mechanical keyboard keycaps, designed by kapowaz industries',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kap-legends.kapowaz.industries',
  // use this for test deployments
  // url: 'https://friendly-brioche-c8320b.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // use this to import environment variables at runtime
  customFields: {
    discordInviteUrl: process.env.DISCORD_INVITE_URL,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: 'img/logo.svg',
      },
    },
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'KAP Legend System',
      logo: {
        alt: 'KAP Legend System logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright &copy; ${new Date().getFullYear()} kapowaz industries`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/keycap-sets',
            to: '/projects',
          },
        ],
      },
    ],
  ],
};

export default config;
