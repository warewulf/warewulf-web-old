module.exports = {
  title: 'Warewulf',
  tagline: 'A stateless and diskless container operating system provisioning system for large clusters of bare metal and/or virtual systems.',
  url: 'https://warewulf.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'hpcng',
  projectName: 'warewulf-web-old',
  themeConfig: {
    navbar: {
      title: 'Warewulf',
      logo: {
        alt: 'Warewulf Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'news', label: 'News', position: 'left'},
        {
          href: 'https://github.com/hpcng/warewulf',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/hpcng/shared_invite/zt-qda4h1ls-OP0Uouq6sSmVE6i_0NrWdw',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCQbKq1vIffqRAMUDPfHcU0w',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hpcng/warewulf',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HPCng. - All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/hpcng/warewulf-web-old/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/hpcng/warewulf-web-old/edit/main/blog/',
          routeBasePath: 'news',
          path: './news',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
