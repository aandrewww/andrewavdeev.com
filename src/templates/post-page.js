/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const PostPageTemplate = ({ content, contentComponent, description, title /* tags */ }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container wide>
      <div>
        <h1>{title}</h1>
        <span>
          <time dateTime="13-11-2018">Tuesday. November 13, 2018</time> -{' '}
          <span title="Estimated read time">2 mins</span>
        </span>
        <p>{description}</p>
        <PageContent content={content} />
        {/* tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4 style={{ 'text-align': 'center' }}>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
              ) : null */}
      </div>
    </Container>
  );
};

PostPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

PostPageTemplate.defaultProps = {
  contentComponent: null,
  description: '',
  title: '',
};

const Post = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Head pageTitle={post.frontmatter.title} />
      <PostPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Post;

export const query = graphql`
  query PostByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
