
/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container, Bage } from 'components/blocks';
import Head from 'components/head';
import { CustomLink } from 'components/custom-link';

const Blog = ({ data }) => {
  const posts = data.blogPageData.edges;

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <Container wide>
        <div sx={{ mb: 2 }}><Bage>Posts</Bage></div>
        <div>
          { posts.map((post) => (
            <li key={post.node.fields.slug}>
              <CustomLink linkURL={post.node.fields.slug}>
                <span sx={{ variant: 'styles.navitem' }}>
                  {post.node.frontmatter.title}
                </span>
              </CustomLink>
            </li>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Blog;

export const query = graphql`
  query BlogPageQuery {
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
            title
            description
            heroText
            date
            tags
          }
        }
      }
    }
  }
`;
