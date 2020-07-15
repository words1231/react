import React from "react";
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
import routes from "../main/index";
import { Route,Redirect,Switch } from "react-router-dom";
// 无状态组件
export default class LayoutHeader extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  createRoute() {
    var res = [];
    routes.map((ele) => {
      res.push(
        <Route
          key={ele.id}
          exact
          path={ele.path}
          component={ele.component}
        ></Route>
      );
      if (ele.children) {
        ele.children.map((ele) => {
          res.push(
            <Route
              key={ele.id}
              exact
              path={ele.path}
              component={ele.component}
            ></Route>
          );return false;
        });
      }return false;
    });
    return res;
  }
  render() {
    const { Content } = Layout;
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }} className="right">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
            {this.createRoute()}
            <Redirect from="/*" to="/Demo"></Redirect>
          </Switch>
        </Content>
      </Layout>
    );
  }
}
