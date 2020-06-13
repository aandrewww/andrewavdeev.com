/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import posed from 'react-pose';
import { jsx, css, useColorMode } from 'theme-ui';

import sun from 'src/images/sun.png';
import moon from 'src/images/moon.png';

import Socials from 'components/socials';
import Switch from 'components/switch';
import Navbar from 'components/navbar';

// Example of a component-specific page transition
// const AnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// });

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: 'none',
      margin: 4,
    }}
  />
);

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: 'none',
      margin: 4,
    }}
  />
);

const Sidebar = ({ navbarData, socialsData }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    // <AnimatedContainer>
    <header
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mx: 'auto',
        px: 3,
        py: 3,
      }}
    >
      <div sx={{ flex: 1, flexDirection: 'column' }}>
        <div>
          <Link
            to="/"
            sx={{
              variant: 'styles.navlink',
              fontSize: 4,
              py: 2,
            }}
          >
            <span>ANDREW</span>
          </Link>
        </div>

        <Switch
          aria-label="Toggle dark mode"
          css={css({
            bg: 'black',
          })}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          /* eslint-disable-next-line react/jsx-no-bind */
          onChange={toggleColorMode}
        />
      </div>

      <Navbar data={navbarData} />
      <Socials data={socialsData} />
    </header>
    // </AnimatedContainer>
  );
};

Sidebar.propTypes = {
  navbarData: PropTypes.shape(),
  socialsData: PropTypes.shape(),
};

Sidebar.defaultProps = {
  navbarData: {},
  socialsData: {},
};

export default Sidebar;
