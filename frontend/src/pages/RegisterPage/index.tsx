import React, {useState} from 'react'
import './index.css'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../_actions/user_action'

const RegisterPage  = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [userName, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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


    const onRegisterSubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        //누를 때마다 페이지 리프레시가 된다.
        e.preventDefault()
        if(password !== confirmPassword){
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }
        let body = {
            email : email,
            password : password,
            name : userName,
        }
        //loginUser action을 사용
        //return값으로 redux값이 온다.
        const res : any = await dispatch(registerUser(body))
        //회원가입 성공
        console.log(res)
        if(res.payload.success){
            window.location.href = "/login"
        }else{
            alert("Failed to sign up")
        }
    }

    return (
        <div className="login-form-container">
            <form className= "login-form" onSubmit={onRegisterSubmitHandler}>
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
            </form>
        </div>
    )
}

export default RegisterPage