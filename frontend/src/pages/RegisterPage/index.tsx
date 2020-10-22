import React, {useState} from 'react'
import './index.css'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../_actions/user_action'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
const RegisterPage  = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [userName, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [publicKey, setPublicKey] = useState("")
    const [privateKey, setPrivateKey] = useState("")

    const onEmailHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.currentTarget.value)
    }

    const onNameHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setName(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setConfirmPassword(e.currentTarget.value)
    }

    const onPublicKeyHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPublicKey(e.currentTarget.value)
    }

    const onPrivateKeyHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPrivateKey(e.currentTarget.value)
    }


    const onRegisterSubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        //누를 때마다 페이지 리프레시가 된다.
        
        if(password !== confirmPassword){
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }
        let body = {
            email : email,
            password : password,
            name : userName,
            publicKey: publicKey,
            privateKey :privateKey
        }
        //loginUser action을 사용
        //return값으로 redux값이 온다.
        //payload 값으로 success가 온다.
        const res : any = await dispatch(registerUser(body))
        //회원가입 성공
        console.log("result", res)
        if(res.payload){
            window.location.href = "/login"
        }else{
            alert("Failed to sign up")
        }
    }

    return (
        <div className="register-container">
            <div className="register-form-container">
                <div className="register-form-title-container">
                    <h2>webtoon</h2>
                </div>
                <Form name="normal_login" className="register-form" initialValues={{remember: true,}} onFinish={onRegisterSubmitHandler}>
                    <Form.Item name="userEmail" rules={[{required: true,message: 'Please input your Email!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={onEmailHandler}/>
                    </Form.Item>
                    <Form.Item name="userName" rules={[{required: true,message: 'Please input your Username!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" onChange={onNameHandler}/>
                    </Form.Item>
                    <Form.Item name="userPassword" rules={[{required: true,message: 'Please input your Password!',},]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password" onChange={onPasswordHandler}/>
                    </Form.Item>
                    <Form.Item name="userPasswordConfirm" rules={[{required: true,message: 'Please input your Password Confirm!',},]}>
                        <Input  prefix={<LockOutlined className="site-form-item-icon" />} type="password"placeholder="Confirm Password" onChange={onConfirmPasswordHandler}/>
                    </Form.Item>
                    <Form.Item name="userPublicKey" rules={[{required: true,message: 'Please input your Public key!',},]}>
                        <Input  prefix={<KeyOutlined className="site-form-item-icon" />} type="password"placeholder="Public Key" onChange={onPublicKeyHandler}/>
                    </Form.Item>
                    <Form.Item name="userPrivateKey" rules={[{required: true,message: 'Please input your Private Key!',},]}>
                        <Input  prefix={<KeyOutlined className="site-form-item-icon" />} type="password"placeholder="Private Key" onChange={onPrivateKeyHandler}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">Register</Button>
                        <br/>
                        <a href="/login">Do you already have an account?</a>
                    </Form.Item>
                </Form>
            </div>
            {/* <form className= "login-form" onSubmit={onRegisterSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={userName} onChange={onNameHandler}/>
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
                <br/>
                <button>회원 가입</button>
            </form> */}
        </div>
    )
}

export default RegisterPage