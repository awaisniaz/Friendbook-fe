import React from 'react';
import './styles.scss';
import { Button, Dropdown, Menu, } from 'antd';
import { MoreOutlined, UserOutlined } from '@ant-design/icons';
import data from '../../../user-data/postdata.js';
export default function MiddlePanel() {
    const menu = (
        <Menu onClick={() => { }}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
          </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
          </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
          </Menu.Item>
        </Menu>
    );
    return (
        <div className="middle-panel">
            <div className="story-container"></div>
            {   data.map(item => {
                return <div className="post-container">
                    <div className="post-header">
                        <div className="post-user-avatar"><img src={item.avatar} alt={item.email}></img></div>
                        <div className="name-and-time-container">
                            <p className="profile-Name">{`${item.first_name} ${item.last_name}`}</p>
                            <p className="post-time">{item.upload_date}</p>
                        </div>
                        <div className="menu-btn"><Dropdown overlay={menu}><Button><MoreOutlined /></Button></Dropdown></div>
                    </div>
                    <div className="photo-container">
                        <image src='https://images.unsplash.com/photo-1618572195571-1fdd75cd7add?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt="background image"></image>
                    </div>
                    <div className="footerContainer">

                    </div>
                </div>

            })
            }
        </div>
    )
}
