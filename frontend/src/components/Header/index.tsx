import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Alert} from "antd"
import './index.css';
import authorAdminPage from '../../pages/authorAdminPage';
// mock
// const spbk = "0xd032819569de737f5ef01e0f11920a831308a340"
// const spk = "0x83d747fd5cb3f18ae1022265236ec8f3db195af55ae37644a24ea79769503ef2"
const Header = () => {
    const [publicKey, setPublicKey] = useState()
    const [privateKey, setPrivateKey] = useState()
    const onLogoutHandler = async (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const res = await axios.get('/api/users/logout')
        if(res.data.success){
            window.location.href = '/login'
        }else{
            alert("로그아웃 하는데 실패하였습니다.")
        }
    }
    useEffect(()=> {
        onAuthHandler().then((res) =>{
            setPublicKey(res.publicKey)
            setPrivateKey(res.privateKey)
        })
    },[])
    const onAuthHandler = async () => {
        return await axios("/api/users/auth").then(res=> {return res.data})
    }
    const onBuyTokenHandler = async (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if(window.confirm("100 토큰을 충전하시겠습니까?")){
            const res = await axios.post('/api/token/token_buy',{user : {public_key : publicKey, private_key : privateKey  ,amount : 100}})
            if(res.data.success){
                alert("100토큰 충전에 성공하였습니다!")
            }
        }
    }
    
    return(
        <header>
            <div className="inner">
                <h2 className="logo"><a href="#"><img src="" alt=""/></a></h2>
                <nav className="nav-left">
                    <ul>
                        <li ><a href="/">소개</a></li>
                        <li ><a href="/webtoon">웹툰</a></li>
                        <li ><a href="/self2image">연구실</a></li>
                    </ul>
                </nav>
                <nav className="nav-right">
                    <ul>
                        <li ><a href="#" onClick={onLogoutHandler}><i className="fa fa-hourglass-start" aria-hidden="true"></i>로그아웃</a></li>
                        <li ><a href="#" onClick={onBuyTokenHandler}><i className="fa fa-shopping-cart" aria-hidden="true"></i>토큰 충전</a></li>
                        <li ><a href="/webtoon/author/admin/baba@naver.com/banana"><i className="fa fa-hourglass-start" aria-hidden="true"></i>내 정보</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;