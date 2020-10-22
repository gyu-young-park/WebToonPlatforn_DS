import * as React from 'react';
import axios from 'axios'
import './index.css';
const spbk = "0xd032819569de737f5ef01e0f11920a831308a340"
const spk = "0x83d747fd5cb3f18ae1022265236ec8f3db195af55ae37644a24ea79769503ef2"
const Header = () => {
    const onLogoutHandler = async (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const res = await axios.get('/api/users/logout')
        if(res.data.success){
            window.location.href = '/login'
        }else{
            alert("로그아웃 하는데 실패하였습니다.")
        }
    }
    const onBuyTokenHandler = (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        axios.post('/api/token/token_buy',{user : {public_key : spbk, private_key : spk,amount : 100}}).then((res) => {
            console.log(res)
        })
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
                        <li ><a href="#" onClick={onBuyTokenHandler}><i className="fa fa-hourglass-start" aria-hidden="true"></i>토큰 충전</a></li>
                        <li ><a href="/webtoon/author/admin/baba@naver.com/banana"><i className="fa fa-hourglass-start" aria-hidden="true"></i>내 정보</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;