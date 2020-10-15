import React, {useState} from 'react'
import './index.css'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../_actions/user_action'

const LoginPage  = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.currentTarget.value)
    }
    const onLoginSubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        //누를 때마다 페이지 리프레시가 된다.
        e.preventDefault()
        console.log(email, password)
        let body = {
            email : email,
            password : password
        }
        //loginUser action을 사용
        //return값으로 redux값이 온다.
        const res : any = await dispatch(loginUser(body))
        //로그인 성공
        if(res.payload.loginSuccess){
            window.location.href = "/"
        }else{

        }
    }

    return (
        <div className="login-form-container">
            <form className= "login-form" onSubmit={onLoginSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage