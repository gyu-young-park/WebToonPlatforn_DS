import * as React from 'react'
import './index.css'

const Team = () => {
    return(
        <section className="team">
            <div className="title">
                <h2>Our Team</h2>
                <p>우리팀을 소개합니다.</p>
            </div>
            <ul className="list">
                <li>
                    <h3><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>블록체인 웹툰 사이트 소개</h3>
                    <p>
                        저희 웹툰 플랫폼은 블록체인을 기반으로 만들어졌습니다. 블록체인을 통해 저희 플랫폼의 투명성을 보장합니다. 또, 작가들은 독자들이 지불한 대가를 바로 받으실 수 있습니다.
                        또한, 저희는 다른 웹 플랫폼과는 달리 여러 웹툰 컨텐츠들을 제공합니다. GAN을 이용한 웹툰 캐릭터 생성, NLP를 이용한 캐릭터 생성, 댓글 분류 등을 만나보세요.
                    </p>
                </li>
                <li>
                    <h3><span><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>팀 Four 항공대</h3>
                    <p>저희 포-항공대는 4명의 항공대 생으로 구성되어 있습니다. </p>
                    <ul className="in">
                        <li>
                            <em>박규영</em>
                            <p>웹 플랫폼 기획과 프론트, 백엔드 개발, 블록체인 연동을 담당하고 있습니다.</p>
                        </li>
                        <li>
                            <em>윤동희</em>
                            <p>블록체인 연동 서버와 NLP를 이용한 덧글 분류 개발을 담당합니다.</p>
                        </li>
                        <li>
                            <em>김민수</em>
                            <p>GAN 모델을 통해 self-to-webtoon 기능을 담당하고 있습니다.</p>
                        </li>
                        <li>
                            <em>신준범</em>
                            <p>GAN 모델을 통한 신사업 부문을 담당하고 있습니다.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Team;