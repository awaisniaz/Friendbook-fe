import React from 'react'
import './styles.scss';
import { Empty } from 'antd'

export default function RightPanel() {
    return (
        <div className="right-panel">
            <div className="sponser"><Empty description="No Sponsership" /></div>
            <div className="Friend-request"><Empty description="No Friend Request" /></div>
            <div className="Birth-day"><Empty description="No Birthday" /></div>
            <div className="online-status"><Empty description="No Online User" /></div>
        </div>
    )
}
