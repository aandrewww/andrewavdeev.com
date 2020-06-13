/** @jsx jsx */
import { jsx, Footer as FooterUI } from 'theme-ui';

export const FooterTemplate = () => (
  <FooterUI sx={{ flexShrink: 0 }}>
    ...footer... 2019
  </FooterUI>
);

const Footer = () => <FooterTemplate />;

export default Footer;
