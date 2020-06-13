/** @jsx jsx */
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { jsx, Styled, Layout as LayoutUI, Main, Container } from 'theme-ui';
import { Global } from '@emotion/core';
import Head from 'components/head';
import Sidebar from 'components/sidebar';
import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ data, children }) => (
  <Styled.root>
    <Global
      styles={{'*': { boxSizing: 'border-box' }, body: { margin: 0 } }}
    />
    <LayoutUI
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      <Head />
      <aside
        sx={{
          flexGrow: 1,
          flexBasis: 'sidebarNav',
        }}
      >
        <Sidebar
          title={data.site.siteMetadata.siteTitle}
          navbarData={data.navbarData}
          socialsData={data.footerData}
        />
      </aside>
      <Main
        sx={{
          display: 'flex',
          flexGrow: 9999,
          flexBasis: 0,
          flexDirection: 'column',
          minWidth: 320,
        }}
      >
        <Header title={data.site.siteMetadata.siteTitle} navbarData={data.navbarData} />
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            flexGrow: 1,
            pt: 4,
          }}
        >
          {children}
        </Container>
        <Footer />
      </Main>
    </LayoutUI>
  </Styled.root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape().isRequired,
  // location: PropTypes.shape().isRequired,
};

const LayoutWithQuery = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
          edges {
            node {
              id
              frontmatter {
                navbarItems {
                  label
                  linkType
                  linkURL
                }
              }
            }
          }
        }
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
          edges {
            node {
              id
              frontmatter {
                socialItems {
                  label
                  type
                  link
                }
              }
            }
          }
        }
      }
    `}
    /* eslint-disable react/jsx-no-bind */
    render={(data) => (
      <Location>
        {({ location }) => (
          <Layout data={data} location={location}>
            {children}
          </Layout>
        )}
      </Location>
    )}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
