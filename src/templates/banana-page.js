import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BananaPageTemplate = ({
  title,
  content,
  contentComponent,
  name,
  email,
  phone
}) => {
  const PageContent = contentComponent || Content;

  console.log("banana content", content);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <pre>{name}</pre>
              <pre>{email}</pre>
              <pre>{phone}</pre>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BananaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const BananaPage = ({ data }) => {
  console.log("banana data", data);
  const {
    markdownRemark: { frontmatter, html }
  } = data;
  /*  console.log(data.markdownRemark.frontmatter.name);*/

  return (
    <Layout>
      <BananaPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={html}
        name={frontmatter.name}
        email={frontmatter.email}
        phone={frontmatter.phone}
      />
    </Layout>
  );
};

BananaPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BananaPage;

export const bananaPageQuery = graphql`
  query BananaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        name
        email
        phone
        baz
      }
    }
  }
`;
