const path = require('path');

module.exports = {
  siteTitle: 'Andrew Avdeev | Personal website',
  siteTitleShort: 'Portfolio',
  siteDescription: 'Andrew Avdeev | Personal website',
  siteUrl: 'https://andrewavdeev.com',
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: '',
    fbAppId: '',
  },
  googleAnalyticsId: process.env.GA_ID || '',
};
