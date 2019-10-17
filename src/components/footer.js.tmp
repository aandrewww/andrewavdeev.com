/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Footer as FooterUI } from 'theme-ui';
import { CustomLink } from 'components/custom-link';
import Email from '../images/social/email.svg';
import Github from '../images/social/github.svg';
import Linkedin from '../images/social/linkedin.svg';
import Twitter from '../images/social/twitter.svg';
import Facebook from '../images/social/facebook.svg';
import Tumblr from '../images/social/tumblr.svg';
import Youtube from '../images/social/youtube.svg';
import Instagram from '../images/social/instagram.svg';
import Flickr from '../images/social/flickr.svg';
import Goodreads from '../images/social/goodreads.svg';

const FOOTER_ICONS = {
  email: <Email />,
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  facebook: <Facebook />,
  tumblr: <Tumblr />,
  youtube: <Youtube />,
  instagram: <Instagram />,
  flickr: <Flickr />,
  goodreads: <Goodreads />,
};

export const FooterTemplate = ({ data }) => (
  <FooterUI>
    {data.socialItems.length > 0 && (
      <ul
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {data.socialItems.map((menuItem) => (
          <li
            key={menuItem.link}
            sx={{
              variant: 'styles.footeritem',
            }}
          >
            <CustomLink linkType="external" linkURL={menuItem.link}>
              {FOOTER_ICONS[menuItem.type]}
            </CustomLink>
          </li>
        ))}
      </ul>
    )}
  </FooterUI>
);

FooterTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const Footer = (props) => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;

  return <FooterTemplate data={data} />;
};

Footer.propTypes = {
  data: PropTypes.shape(),
};

Footer.defaultProps = {
  data: null,
};

export default Footer;
