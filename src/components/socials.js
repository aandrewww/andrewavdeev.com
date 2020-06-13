/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
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

const SOCIAL_ICONS = {
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

export const SocialsTemplate = ({ data }) => (
  <div
    sx={{
      flex: 1,
    }}
  >
    {data.socialItems.length > 0 && (
      <ul
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          height: '100%',
          padding: 0,
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
              {SOCIAL_ICONS[menuItem.type]}
            </CustomLink>
          </li>
        ))}
      </ul>
    )}
  </div>
);

SocialsTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const Socials = (props) => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;

  return <SocialsTemplate data={data} />;
};

Socials.propTypes = {
  data: PropTypes.shape(),
};

Socials.defaultProps = {
  data: null,
};

export default Socials;
