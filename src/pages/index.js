/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Styled, jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container, Bage, List } from 'components/blocks';
import { CustomLink } from 'components/custom-link';

const Index = ({ data }) => {
  const { frontmatter: home } = data.homePageData.edges[0].node;
  const posts = data.blogPageData.edges;

  return (
    <Layout>
      <Container>
        <Styled.h1 sx={{ variant: 'type.hero', mt: 5, mb: 5 }}>{home.heroText}</Styled.h1>
      </Container>

      <Container>
        <div sx={{ mb: 3 }}><Bage>Blog</Bage></div>
        <div sx={{ mt: 1 }}>
          { posts.map((post) => (
            <div key={post.node.fields.slug} sx={{ mt: 2 }}>
              <List>
                <div>
                  <span sx={{ variant: 'type.subHeading', color: 'secondary' }}>
                    <span>{ post.node.frontmatter.date }</span>
                    <span> • { post.node.timeToRead } MIN</span>
                  </span>
                </div>
                <CustomLink linkURL={post.node.fields.slug}>
                  <span sx={{ variant: 'type.heading' }}>
                    {post.node.frontmatter.title}
                  </span>
                </CustomLink>
              </List>
            </div>
          ))}
        </div>
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
    blogPageData: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "post-page"}, title: {}}}) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            heroText
            tags
          }
        }
      }
    }
  }
`;
