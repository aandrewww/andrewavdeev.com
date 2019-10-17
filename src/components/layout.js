/** @jsx jsx */
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { jsx, Styled, Layout as LayoutUI, Main } from 'theme-ui';
import { Global } from '@emotion/core';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ data, children, location }) => (
  <Styled.root>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
      }}
    />
    <LayoutUI>
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} navbarData={data.navbarData} />
      <Main
        sx={
          location.pathname === '/'
            ? {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }
            : {}
        }
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </Main>
      <Footer data={data.footerData} />
    </LayoutUI>
  </Styled.root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
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
        sitePage {
          path
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
            {' '}
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