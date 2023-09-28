import React from "react";
import {
    ScheduleOutlined,
    MenuOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
  import '../index.css';
  import { Layout, Menu, theme  } from 'antd';
import CoverImage from "./CoverImage";
import Info from "./Info";
import Profile from "./Profile";

  
  
  const { Header, Sider, Content } = Layout;
  
  const HomePage: React.FC = () => {

    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    return (
      <Layout>
        <Sider theme="light" width="80px" className="sider"style={{minHeight:"100vh",position:"fixed"}}>
          <div className="demo-logo-vertical" />
          <Menu
            mode="inline"
            items={[
              {
                key: '1',
                icon: <MenuOutlined style={{ fontSize: '150%'}}/>,
              },
              {
                key: '2',
                icon: <HomeOutlined style={{ fontSize: '150%'}} />,
              },
              {
                key: '3',
                icon: <ScheduleOutlined  style={{ fontSize: '150%'}}/>,
              },
            ]}
          />
        </Sider>
        <Layout style={{backgroundColor:colorBgContainer}}>
          <Header className="header" style={{
            background: colorBgContainer,
            position:"static"
            }}>
            <>
            <div className="grid">
              <div>Program Details</div>
              <div className="app_form">Application Form</div>
              <div className="workflow">Workflow</div>
              <div>Preview</div>
            </div>
            </>
          </Header>
          <Content
            className="content"
            style={{
              background: colorBgContainer,
            }}
          >
            <CoverImage/>
            <Info/>
            <Profile/>
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default HomePage;