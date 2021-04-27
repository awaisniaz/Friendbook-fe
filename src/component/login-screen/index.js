import React, { useState } from 'react'
import './styles.scss'
import { loginUser, registerUser } from '../../Apis/index'
import { Button, Input, Checkbox } from 'antd'
export default function LoginSplach() {
    const [login, setLogin] = useState(true)
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm: '',
        avatar: ''
    })
    const onupdateData = (e, value) => {
        let name = e.target.name
        setData({ ...data, [name]: value })
    }
    return (
        <div className="login-container">
            <div className="main-container">
                <div className="logo">
                    <img src="https://img.icons8.com/color/24/000000/gender-neutral-user.png" alt="icon" />
                </div>
                <div className="input-container">
                    {login ?
                        <>
                            <Input placeholder="Enter your Email" className="login-input" name="email" onChange={(e) => {
                                onupdateData(e, e.target.value)
                            }}></Input>
                            <Input placeholder="Enter your Password" className="login-input" type="password" name="password" onChange={(e) => {
                                // const hashpassword = bcrypt.hashSync(e.target.value, 10)
                                onupdateData(e, e.target.value)
                            }} ></Input>
                            <div className="mics-action">
                                <Checkbox onChange={() => { }}>Remember me!</Checkbox>
                                <Button>Forget Password</Button>
                            </div>
                        </>
                        :
                        <>
                            <div className="name">
                                <Input placeholder="First Name" name="first_name" onChange={(e) => {
                                    onupdateData(e, e.target.value)
                                }}></Input>
                                <Input placeholder="Last Name" name="last_name" onChange={(e) => {
                                    onupdateData(e, e.target.value)
                                }} ></Input>
                            </div>
                            <Input type="email" placeholder="Enter your Email" name="email" autoComplete="false" onChange={(e) => {
                                onupdateData(e, e.target.value)
                            }}></Input>
                            <Input type="password" placeholder="Enter your Password" name="password" onChange={(e) => {
                                // const hashpassword = bcrypt.hashSync(e.target.value, 10)
                                onupdateData(e, e.target.value)
                            }}></Input>
                            <Input type="password" placeholder="Enter your Confirm Password" name="confirm" onChange={(e) => {
                                // const hashpassword = bcrypt.hashSync(e.target.value, 10)
                                onupdateData(e, e.target.value)
                            }}></Input>
                            <Input type="file" name="avatar" onChange={(e) => {
                                onupdateData(e, e.target.value)
                            }}></Input>
                        </>
                    }
                </div>
                <div className="action-btn">
                    {login ?
                        <Button type="primary" onClick={() => {
                            loginUser(data)

                        }}>Login</Button>
                        :
                        <Button type="primary" onClick={() => {
                            registerUser(data)
                        }}>Registration</Button>
                    }
                </div>
                <div>
                    {login ? <Button type="link" onClick={() => {
                        setLogin(false)
                    }}> Register here</Button> : <Button type="link" onClick={() => {
                        setLogin(true)
                    }}>Login here</Button>
                    }
                </div>

            </div>
        </div>
    )
}
