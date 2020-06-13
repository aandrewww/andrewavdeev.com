/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const PostPageTemplate = ({ content, contentComponent, description, title, date, timeToRead /* tags */ }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <span>
          <span>{date}</span>
          <span> • {timeToRead} MIN</span>
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
  timeToRead: PropTypes.number.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

PostPageTemplate.defaultProps = {
  contentComponent: null,
  description: '',
  date: '',
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
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
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
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
