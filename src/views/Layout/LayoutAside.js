import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined,NotificationOutlined,} from "@ant-design/icons";
import routes from "../main/index";
import { NavLink } from "react-router-dom";
// 无状态组件
export default class LayoutHeader extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  createNavLink() {
    return routes.map((ele) => (
      <Menu.Item key={ele.id}>
        <NavLink exact activeClassName="on" to={ele.path}>
          {ele.text}
        </NavLink>
      </Menu.Item>
    ));
  }
  
  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            {this.createNavLink()}
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
            <Menu.Item key="13">option13</Menu.Item>
            <Menu.Item key="14">option14</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
