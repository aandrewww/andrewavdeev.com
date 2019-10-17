import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const BookshelfPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container wide>
      <div>
        <PageContent content={content} />
      </div>
    </Container>
  );
};

BookshelfPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

BookshelfPageTemplate.defaultProps = {
  contentComponent: null,
};

const Bookshelf = ({ data }) => {
  const { frontmatter: { title }, html } = data.bookshelfPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <BookshelfPageTemplate
        contentComponent={HTMLContent}
        heading={title}
        content={html}
      />
    </Layout>
  );
};

Bookshelf.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Bookshelf;

export const query = graphql`
  query BookshelfPageQuery {
    bookshelfPageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "bookshelf-page" } } }) {
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
