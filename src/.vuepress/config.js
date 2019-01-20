module.exports = {
  title: 'Cyrille Bourgois',
  description: 'Front Developer',
  base: '/',
  theme: 'casper',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: 'https://source.unsplash.com/random',
    // logo: '/me.png',`
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Posts',
        link: '/posts'
      },
      {
        text: 'Code',
        link: '/category/code'
      },
      {
        text: 'Page',
        link: '/a-page.html'
      }
    ],

    footer: [
      {
        text: 'Latest Posts',
        link: '/posts'
      },
      {
        text: 'LinkedIn',
        link: 'https://facebook.com/'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/cyrillebourgois'
      },
      {
        text: 'Github',
        link: 'https://github.com/cbourgois'
      }
    ],
    social: {
      github: 'https://github.com/cbourgois',
      twitter: 'https://twitter.com/cyrillebourgois',
      // facebook: 'https://facebook.com',
      // xing: 'https://xing.de',
      // instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com/'
    }
  }
};