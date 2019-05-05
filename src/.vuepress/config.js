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
    // cover: 'https://source.unsplash.com/random?orientation=landscape&featured=1',
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
        text: 'Resume',
        link: '/resume.html'
      }
    ],

    footer: [
      {
        text: 'Latest Posts',
        link: '/posts'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/cbourgois'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/cyrillebourgois'
      },
      {
        text: 'LinkedIn',
        link: 'https://fr.linkedin.com/in/cyrillebourgois'
      },
    ],
    social: {
      github: 'https://github.com/cbourgois',
      twitter: 'https://twitter.com/cyrillebourgois',
      linkedin: 'https://fr.linkedin.com/in/cyrillebourgois'
    }
  }
};