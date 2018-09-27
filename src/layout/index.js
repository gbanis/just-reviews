import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

import "./index.css";

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Layout className="layout">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header>
        <Link className="logo" to="/" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', }}
            selectable={false}
          >
            <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px 50px 0', }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
