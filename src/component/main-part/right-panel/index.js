import React, { useState } from 'react'
import './styles.scss';
import { Input } from 'antd'
import data from '../../../user-data/MOCK_DATA'
import birthdaya from '../../../user-data/birthday-data'
import { Button } from 'antd'
import sponserdata from '../../../user-data/sponserdata'

export default function RightPanel() {
    const element = data
    const birthday_user = birthdaya.slice(0, 2)
    const randomSponser = Math.floor(Math.random() * 10)
    const promotiondata = sponserdata[randomSponser]
    
    const [useData, setUserData] = useState(element)
    const searchActiveUser = (name) => {
        console.log(name)
        if (name === undefined || name === null || name === '') {
            setUserData(element)
        }
        else {
            const searchUser = element.filter(item => item.first_name.includes(name))
            console.log(searchUser)
            setUserData(searchUser)
        }
    }
    return (
        <div className="right-panel">
            <div className="sponser">
                <div className="sponser-container">
                    <div className="poster"><img src={promotiondata.photo} alt=""></img></div>
                    <div className="description-container">
                        <div className="title-container">{promotiondata.Company}</div>
                        <div className="subtitle-container">{promotiondata.sentense}</div>
                    </div>
                </div>

            </div>
            <div className="Friend-request">
                <div className="birthday-title"><p>Upcoming Birthdays</p></div>
                {birthday_user.map(item => {
                    return <div className="birthday-container">
                        <div className="avatar" style={{ background: item.color }} ><img src={item.avatar} alt="" /></div>
                        <div className="name-container"><span>{item.name}</span></div>
                        <div className="request-action">
                            <Button type="primary">Confirm</Button>
                            <Button type="default">Delete</Button>
                        </div>
                    </div>
                })

                }
            </div>
            <div className="Birth-day">
                <div className="birthday-header-section">
                    <p>Friend Requests</p>
                    <Button type="default"> See All</Button>
                </div>
                {birthday_user.map(item => {
                    return <div className="birthday-container">
                        <div className="avatar" style={{ background: item.color }} ><img src={item.avatar} alt="" /></div>
                        <div className="name-container"><span>{item.name}</span></div>
                        <div className="birthlogo"><img src="https://img.icons8.com/color/24/000000/birthday.png" alt="" /></div>
                    </div>
                })

                }
            </div>
            <div className="online-status" onClick={() => {
            }}>
                <div className="search-box-container">
                    <div>Contact <span>{`(${useData.length})`}</span></div>
                    <Input className="Search-box" placeholder="Search your Friend" onChange={(e) => {
                        searchActiveUser(e.target.value)
                    }}></Input>
                </div>


                {/* <Empty description="No Online User" /></div> */}
                {useData.map(item => {
                    return <div className="Friend-online">
                        <div className="avatar-container" style={{ background: item.background }}>
                            {item.profile ?
                                <img src={item.profile} alt={item.first_name.substring(0, 2)}></img>
                                : item.first_name.substring(0, 2)
                            }
                        </div>
                        <div className="Name">{`${item.first_name} ${item.last_name}`}</div>
                        {item.online && <div className="indicator"></div>}
                    </div>
                })

                }
            </div>

        </div >
    )
}
