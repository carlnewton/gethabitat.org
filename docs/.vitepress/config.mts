import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Habitat",
  description: "A Platform for Local Communities",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: "logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/what-is-habitat' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'What is Habitat?', link: '/what-is-habitat' },
          { text: 'Get Started', link: '/get-started' },
          { text: 'Screenshots', link: '/screenshots' },
          {
            text: 'Features',
            items: [
              { text: 'For Users', link: 'features/for-users' },
              { text: 'For Moderators', link: 'features/for-moderators' },
              { text: 'For Administrators', link: 'features/for-administrators' }
            ]
          },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ]
      },
      {
        items: [
          { text: 'Habitat on Docker Hub', link: 'https://hub.docker.com/r/carlnewton/habitat' },
          { text: 'Habitat on GitHub', link: 'https://github.com/carlnewton/habitat' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/carlnewton/habitat' }
    ]
  }
})
