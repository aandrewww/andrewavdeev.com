import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { IconMail } from '../components/icons/icon-mail';
import { IconTwitter } from '../components/icons/icon-twitter';
import { IconFacebook } from '../components/icons/icon-facebook';
import { IconGithub } from '../components/icons/icon-github';
import { SOCIALS } from '../constants';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div className="page blog container">
          <header className="home-hero animated">
            <a className="link" href="/about">
              <img className="selfie" alt="Andrew avdeev" src="/images/profile.jpg" />
            </a>
            <h1 className="title">Hello 🙋‍♂️</h1>
            <h2 className="description">
              My name is Andrew.
              <br />I am a full-stack web developer based in Minsk, Belarus.
            </h2>
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
