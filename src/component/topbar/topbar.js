import React from 'react'
import './topbar.scss'
import {
    Input,
    Button,
    Tooltip,
    Avatar
} from 'antd';
import {
    SearchOutlined,
    UserOutlined
} from '@ant-design/icons';
export default function Topbar() {

    const action_Config = [{
        onclick: () => { },
        Title: 'Home',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/home.png" alt="H" />
    },
    {
        onclick: () => { },
        Title: 'Watch',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/tv-show.png" alt="H" />
    },
    {
        onclick: () => { },
        Title: 'Group',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/conference-call.png" alt="H" />
    },
    {
        onclick: () => { },
        Title: 'Gaming',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/facebook-gaming.png" alt="h" />
    },

    ]
    const subAction = [{
        Title: 'Create',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/plus-math--v1.png" alt="add" />,
        onClick: () => {
        }
    },
    {
        Title: 'Messanger',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/facebook-messenger.png" alt="msg" />,
        onClick: () => {
        }
    }, {
        Title: 'Notification',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/alarm.png" alt="notification" />,
        onClick: () => {
        }
    }, {
        Title: 'Account',
        icon: <img src="https://img.icons8.com/material-rounded/24/000000/sort-down.png" alt="arrow" />,
        onClick: () => {
        }
    }]
    return (
        <div className="header-container">
            <div className="logo-container">
                < div className="logo" > <h3>FB</h3></div >
                <div className="search-bar">
                    <Input size="large" placeholder="Search Friendbook" prefix={<SearchOutlined />} className="search-field" />
                </div>
            </div >
            <div className="Option-container">
                {action_Config.map(item => {
                    return <Tooltip title={item.Title} placement='bottom'><Button onClick={item.onclick}>{item.icon}</Button></Tooltip>
                })
                }
            </div>
            <div className="sub-option-container">
                <div className="account-detail">
                    <div className="account-detail-btn">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <span>Awais Niaz</span>
                    </div>

                </div>
                <div class="btn-container">
                    {
                        subAction.map(item => {
                            return <Tooltip title={item.Title} placement='bottom'>
                                <Button onClick={item.onClick}>{item.icon}</Button>
                            </Tooltip>
                        })
                    }
                </div>
            </div>
        </div >
    )
}
