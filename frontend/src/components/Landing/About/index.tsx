import * as React from 'react'
import './index.css';

const About = () => {
    return (
        <section className="about">
            <div className="title">
                <h2>ABOUT Out Web</h2>
                <p>새로운 패러다임을 제공합니다.</p>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <p className="img"><img src={require('./img/cartoon.jpg')} alt=""/></p>
                        <div className="text">
                            <h3>소개</h3>
                            <p>다양한 웹툰을 즐겨보세요</p>
                            <p className="more">more</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p className="img"><img src={require('./img/blockchain.png')} alt=""/></p>
                        <div className="text">
                            <h3>웹툰</h3>
                            <p>블록체인으로 만들어졌기 때문에 투명성이 보장됩니다.</p>
                            <p className="more">more</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p className="img"><img src={require('./img/AI.png')} alt=""/></p>
                        <div className="text">
                            <h3>Block Chain</h3>
                            <p>한 번도 보지못한 AI 컨텐츠를 즐겨보세요.</p>
                            <p className="more">more</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default About;