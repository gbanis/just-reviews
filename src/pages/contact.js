import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Disqus from "../components/Disqus/Disqus";

class ContactPage extends Component {
  render() {
    const postNode = {
      frontmatter: {
        title: "Contact",
        category_id: "contact"
      },
      fields: {
        slug: "/contact"
      }
    };
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Contact | ${config.siteTitle}`} />
          <h1>Get in touch</h1>
          <Disqus postNode={postNode}
          />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;

