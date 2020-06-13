
/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container, Bage, List } from 'components/blocks';
import Head from 'components/head';
import { CustomLink } from 'components/custom-link';

const Blog = ({ data }) => {
  const posts = data.blogPageData.edges;

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <Container small>
        <div sx={{ mb: 2 }}><Bage>Blog</Bage></div>
        <div>
          { posts.map((post) => (
            <div sx={{ mt: 2 }} key={post.node.fields.slug}>
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
