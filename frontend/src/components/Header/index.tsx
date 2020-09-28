import * as React from 'react';
import './index.css';
const Header = () => {
    return(
        <header>
            <div className="inner">
                <h2 className="logo"><a href="#"><img src="" alt=""/></a></h2>
                <nav className="nav-left">
                    <ul>
                        <li ><a href="/">소개</a></li>
                        <li ><a href="/">웹툰</a></li>
                        <li ><a href="/self2image">연구실</a></li>
                    </ul>
                </nav>
                <nav className="nav-right">
                    <ul>
                        <li ><a href="#"><i className="fa fa-hourglass-start" aria-hidden="true"></i>개발자</a></li>
                        <li ><a href="#"><i className="fa fa-hourglass-start" aria-hidden="true"></i>더 알아보기</a></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;