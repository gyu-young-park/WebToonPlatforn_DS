import * as React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <h2><img src="" alt=""/></h2>
                <ul className="address">
                    <li>한국항공대학교 소프트웨어학과</li>
                    <li>Copyright 2020</li>
                </ul>
                <ul className="list">
                    <li><a href="#">고객 문의</a></li>
                    <li><a href="#">공지사항</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;