/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const TravelPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container wide>
      <div sx={{ textAlign: 'center' }}>
        <PageContent content={content} />
      </div>
    </Container>
  );
};

TravelPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

TravelPageTemplate.defaultProps = {
  contentComponent: null,
};

const Travel = ({ data }) => {
  const {
    frontmatter: { title },
    html,
  } = data.travelPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <TravelPageTemplate contentComponent={HTMLContent} heading={title} content={html} />
    </Layout>
  );
};

Travel.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Travel;

export const query = graphql`
  query TravelPageQuery {
    travelPageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "travel-page" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
