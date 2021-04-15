import React from 'react'
import './styles.scss'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function LeftPanel() {
    const action_config = [{
        icon: <img src="https://img.icons8.com/color/16/26e07f/about.png" alt="covid" />,
        ttile: 'Covid Information Center'

    },
    {
        icon: <img src="https://img.icons8.com/color/24/26e07f/user-group-man-woman.png" alt="friends" />,
        ttile: 'Friends'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/time-machine--v2.png" alt="recent" />,
        ttile: 'Most Recent'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/add-to-favorites.png" alt="" />,
        ttile: 'Favorities'

    },
    {
        icon: <img src="https://img.icons8.com/office/16/26e07f/groups.png" alt="" />,
        ttile: 'Groups'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/imac.png" alt="" />,
        ttile: 'Watch'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/overtime.png" alt="" />,
        ttile: 'Events'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/commercial.png" alt="" />,
        ttile: 'Ad Center'

    },
    {
        icon: <img src="https://img.icons8.com/offices/16/26e07f/system-task.png" alt="" />,
        ttile: 'Ads Manager'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/rh-plus.png" alt="" />,
        ttile: 'Blood Donations'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/device-manager.png" alt="" />,
        ttile: 'Bussiness Manager'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/student-male--v1.png" alt="" />,
        ttile: 'Campus '

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/help--v1.png" alt="" />,
        ttile: 'Community Help'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/mobile-payment.png" alt="" />,
        ttile: 'Friendbook Pay'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/send-hot-list.png" alt=
            "" />,
        ttile: 'Friends List'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/donate.png" alt="" />,
        ttile: 'Fundraiser'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/controller.png" alt="" />,
        ttile: 'Gaming'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/video-playlist.png" alt="" />,
        ttile: 'Gaming Video'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/find-matching-job.png" alt="" />,
        ttile: 'Jobs'

    },
    {
        icon: <img src="https://img.icons8.com/color/16/26e07f/showing-video-frames.png" alt="" />,
        ttile: 'Live Video'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/facebook-messenger.png" alt="" />,
        ttile: 'Messanger'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/pyramid-toy.png" alt="" />,
        ttile: 'Messanger Kid'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/paste-special.png" alt="" />,
        ttile: 'Offers'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/activity-feed.png" alt="" />,
        ttile: 'Recent Ad Activity'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/back-to-draft.png" alt="" />,
        ttile: 'Saved'

    },
    {
        icon: <img src="https://img.icons8.com/officexs/16/26e07f/partly-cloudy-day.png" alt="" />,
        ttile: 'Weather'

    },

    ]
    return (
        <div className="left-panel">
            <div className="profile">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <span>Muhammad Awais Niaz</span>
            </div>
            <div className="option-menu">{
                action_config.map(item => {
                    return <div className="profile" onClick={() => {
                        window.alert(item.ttile)
                    }} style={{ cursor: 'pointer' }}>
                        {/* <Avatar style={{ backgroundColor: '#87d068' }} icon={item.icon} /> */}
                        <div className="icon">{item.icon}</div>
                        <span>{item.ttile}</span>
                    </div>
                })
            }

            </div>
        </div>
    )
}
