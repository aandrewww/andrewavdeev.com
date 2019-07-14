import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/Layout';
import { IconMail } from '../components/icons/icon-mail';
import { IconTwitter } from '../components/icons/icon-twitter';
import { IconFacebook } from '../components/icons/icon-facebook';
import { IconGithub } from '../components/icons/icon-github';
import { withIntl, Link } from '../i18n/index';
import { SOCIALS } from '../constants';

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div className="page home container">
          <header className="home-hero animated">
            <section className="hero is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title is-spaced">
                    Привет мир! 🙋‍♂️
                  </h1>
                  <h2 className="subtitle">
                    <FormattedMessage id="header.title" />
                    <br />
                    Я Fullstack разработчик из <a className="color-link" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA" target="_blank">Минска</a>.
                    <br />
                    Сейчас работаю в <a className="color-link" href="https://scorum.com/" target="_blank">SCORUM</a>.
                  </h2>
                </div>
              </div>
              <div className="social-links">
                <a className="link" data-title={SOCIALS.github.name} href={SOCIALS.github.url} target="_blank">
                  <IconGithub />
                </a>
                <a className="link" data-title={SOCIALS.facebook.name} href={SOCIALS.facebook.url} target="_blank">
                  <IconFacebook />
                </a>
                <a className="link" data-title={SOCIALS.twitter.name} href={SOCIALS.twitter.url} target="_blank">
                  <IconTwitter />
                </a>
                <a className="link" data-title={SOCIALS.mail.name} href={SOCIALS.mail.url}>
                  <IconMail />
                </a>
              </div>
            </section>
          </header>

          <section className="list">
            {posts.map(({ node: post }) => (
              <div className="item" key={post.id}>
                <Link className="has-text-primary url" to={post.fields.slug}>
                  <aside className="date">
                    <time dateTime="13-11-2018">{post.frontmatter.date}</time>
                  </aside>
                  <h3 className="title">{post.frontmatter.title}</h3>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default withIntl(IndexPage);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
