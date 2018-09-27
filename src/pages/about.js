import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <h1>
            Edit About component or pages/about.js to include your information.
          </h1>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
