import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "@/scss/layout.scss";
import LayoutHeader from "@/views/Layout/LayoutHeader";
import LayoutAside from "@/views/Layout/LayoutAside";
import LayoutMain from "@/views/Layout/LayoutMain";
// import { Provider } from 'react-redux';
// import store from '@/store';
export default class MyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Layout>
            <LayoutAside></LayoutAside>
            <LayoutMain></LayoutMain>
        </Layout>
      </Layout>
    );
  }
}
