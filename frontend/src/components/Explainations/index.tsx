import * as React from 'react'
import './index.css'

const Explainations = () => {
    return(
        <div className="display-wrapper">
            <div className="wrapper">
                <div className="title">
                    당신이 주인공 <br/>
                    웹툰 캐릭터가 되어보세요!
                </div>
                <div className="image-wrapper">
                    <div className="image-content"></div>
                    <h2 className="image-explain">마우스를 올려보세요</h2>
                </div>
                <div className="btn-wrapper">
                    <a href="#bottom" className="btn btn-lg btn-outline-primary btn-start">시작하기</a>
                </div>
            </div>
        </div>
    )
}

export default Explainations