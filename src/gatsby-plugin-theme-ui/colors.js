// const purple60 = '#663399';
// const purple30 = '#D9BAE8';
const grey90 = '#232129';
const black80 = '#1B1F23';

const lightGreen = '#90D4C5';
// const orange = '#d65e4b';
const yellow = '#e5d67d';
const grey = 'rgba(28, 37, 43, 0.7)';

const white = '#fff';
const white96 = '#f6f6f6';
const lightWhite = 'rgba(255, 255, 255, 0.86)';
const opaqueLightYellow = 'rgba(255, 229, 100, 0.2)';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';
const lightGray = 'hsla(0, 0%, 0%, 0.2)';

export default {
  text: black80,
  background: white96,
  primary: grey90,
  secondary: grey,
  accent: grey,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  prism: {
    background: '#011627',
    comment: '#809393',
    string: '#addb67',
    var: '#d6deeb',
    number: '#f78c6c',
    constant: '#82aaff',
    punctuation: '#c792ea',
    className: '#ffc98b',
    tag: '#ffa7c4',
    boolean: '#ff5874',
    property: '#80cbc4',
    namespace: '#b2ccd6',
    highlight: 'hsla(207, 95%, 15%, 1)',
  },
  modes: {
    dark: {
      text: lightWhite,
      background: black80,
      primary: yellow,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: lightGreen,
      heading: white,
    },
  },
};
