/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Styled, jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';

const Index = ({ data }) => {
  const { frontmatter: home } = data.homePageData.edges[0].node;

  return (
    <Layout>
      <Container>
        <Styled.h1 sx={{ variant: 'type.heading', mt: 5, mb: 5 }}>{home.heroText}</Styled.h1>
      </Container>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Index;

export const query = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            heroText
          }
        }
      }
    }
  }
`;
