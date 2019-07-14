// const resume = require('./resume');
const languages = require('../i18n/locales/index');

module.exports = {
  siteUrl: 'https://andrewavdeev.com',
  author: {
    name: 'Andrew Avdeev',
    homeCity: 'Minsk',
    email: 'andrewww.avdeev@gmail.com',
    defaultLink: 'https://github.com/aandrewww'
  },
  sourceCodeLink: 'https://github.com/aandrewww/website',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'posts', slug: '/blog/'},
    {label: 'tags', slug: '/tags/'},
    {label: 'about', slug: '/about/'},
    {
      label: 'resume',
      slug: '/resume/',
      items: [
        {label: 'resume.technologies', slug: '/resume/technologies/'},
        {label: 'resume.jobsAndClients', slug: '/resume/jobsAndClients/'},
        {label: 'resume.educations', slug: '/resume/education'},
        {label: 'resume.languages', slug: '/resume/languages'}
      ]
    },
    {label: 'sourceCode', link: 'https://github.com/angeloocana/angeloocana'},
    {label: 'contact', slug: '/contact/'}
  ],
  languages,
  // resume,
  contact: [
    {
      type: 'email',
      value: 'andrewww.avdeev@gmail.com',
      link: 'mailto:andrewww.avdeev@gmail.com'
    },
    {
      type: 'phone',
      value: '(375) 29-541-86-79',
      country: 'by',
      link: 'tel:(375) 29-541-86-79'
    },
  ]
};
