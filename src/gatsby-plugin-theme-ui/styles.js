export default {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontSize: 2,
  },
  pre: {
    variant: 'prism',
    fontFamily: 'monospace',
    tabSize: 4,
    hyphens: 'none',
    marginBottom: 2,
    color: 'white',
    bg: 'prism.background',
    overflow: 'auto',
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: 'monospace',
    // from typography overrideThemeStyles
    // 'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code'
    fontSize: 'inherit',
  },
  inlineCode: {
    borderRadius: '0.3em',
    color: 'secondary',
    bg: 'highlight',
    paddingTop: '0.15em',
    paddingBottom: '0.05em',
    paddingX: '0.2em',
  },
  // from typography overrideThemeStyles
  a: {
    color: 'secondary',
    ':hover': {
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
  },
  hr: {
    border: 0,
    my: 4,
    borderBottom: '1px solid',
    borderColor: 'muted',
  },
  p: {
    code: {
      fontSize: 'inherit',
    },
  },
  li: {
    code: {
      fontSize: 'inherit',
    },
  },
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: 0.8,
    '&.translation': {
      fontSize: '1em',
    },
  },
  navlink: {
    color: 'inherit',
    variant: 'type.caps',
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary',
    },
  },
  navitem: {
    variant: 'styles.navlink',
    display: 'inline-flex',
    fontWeight: 'bold',
    fontSize: 0,
    py: '0.2em',
    a: {
      color: 'primary',
      textDecoration: 'none',
      px: '0.5em',
      ':hover, :focus': {
        color: 'white',
        backgroundColor: 'black',
        margin: 0,
        border: 0,
      },
    },
  },
  footeritem: {
    variant: 'styles.navlink',
    display: 'inline-flex',
    fontSize: 0,
    maxWidth: '18px',
    my: '0.2em',
    a: {
      color: 'primary',
      ':hover, :focus': {
        textDecoration: 'none',
        border: 'none',
      },
    },
    svg: {
      width: '100%',
      fill: 'primary',
    },
  },
};
