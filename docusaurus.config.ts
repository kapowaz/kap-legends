import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KAP Legend System',
  tagline:
    'A modern and versatile set of legends for custom mechanical keyboard keycaps, designed by kapowaz industries and manufactured by Keyreative',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://kap-legends.kapowaz.industries',
  // use this for test deployments
  url: 'https://friendly-brioche-c8320b.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'kapowaz',
  projectName: 'kap-legends',
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

  // disabling due to this issue: https://github.com/grnet/docusaurus-terminology/issues/28
  // plugins: [
  //   [
  //     '@grnet/docusaurus-terminology',
  //     {
  //       termsDir: './docs/terms',
  //       docsDir: './docs/',
  //       glossaryFilepath: './docs/glossary.md',
  //       // There is the ability to use custom components for the glossary file
  //       // and term preview tooltip, instead of using the ones provided by
  //       // @grnet/docusaurus-term-preview and @grnet/docusaurus-glossary-view.
  //       //
  //       // To modify the default options, add the fields glossaryComponentPath,
  //       // termPreviewComponentPath in the plugins section to provide the
  //       // corresponding component paths (relative to the /docs folder):
  //       //
  //       // glossaryComponentPath: 'relative/path/to/your/component',
  //       // termPreviewComponentPath: 'relative/path/to/your/component',
  //     },
  //   ],
  // ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
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
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Designers’ Guide',
        },
        {
          to: '/keycap-sets',
          label: 'Keycap Sets',
          position: 'left',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/kapowaz/kap-legends',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'KAP Legend System',
          items: [
            {
              label: 'Designers’ Guide',
              to: '/docs/introduction',
            },
            {
              label: 'Projects',
              to: '/keycap-sets',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/T6pFXNTtMB',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/kapowaz.industries',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'kapowaz industries',
              href: 'https://kapowaz.industries',
              icon: 'kapowaz',
            },
            {
              label: 'Keyreative',
              href: 'https://keyreative.store/',
              icon: 'keyreative',
            },
            {
              label: 'Big Cat',
              href: 'https://www.xbigcat.com/',
              icon: 'bigcat',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} kapowaz industries`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
