import React from 'react'
import './styles.scss'
import { Empty } from 'antd'
export default function MiddlePanel() {
    return (
        <div className="middle-panel">
            <Empty description="No Post Yet" />
        </div>
    )
}
