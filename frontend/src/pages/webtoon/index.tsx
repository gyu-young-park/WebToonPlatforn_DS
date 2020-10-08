import * as React from 'react';
import WebtoonCarousel from '../../components/WebtoonCarousel'
import WebtoonList from '../../components/WebtoonList'
import WebtoonRank from '../../components/WebtoonRank'

import { CardItem  } from '../../data/type/cardItem'
import banana from './img/banana.webp'
import baque from './img/baque.webp'
import beauty from './img/beauty.jpg'
import dont from './img/dont.png'
import soundOnMind from './img/soundOnMind.jpg'
import reba from './img/reba.webp'
import './index.css'

const bestCardStyleOption = {
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%'
}
const cardStyleOption = {
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%'
}
const webtoonPage = () =>{

    const bestWebtoon : CardItem[] = [
        {
            metaTitle : "바나나툰",
            metaDesc : "기상천외한 와나나의 세상",
            image : banana
        },
        {
            metaTitle : "해치지 않아",
            metaDesc : "동물원에 동물이 없다?",
            image : dont
        },
        {
            metaTitle : "마음의 소리",
            metaDesc : "즐거운 조석의 일상!",
            image : soundOnMind
        },
        {
            metaTitle : "레바툰",
            metaDesc : "레꼬단은 여기 모여라",
            image : reba
        },
    ]

    const newWebtoon : CardItem[] = [
        {
            metaTitle : "바나나툰",
            metaDesc : "기상천외한 와나나의 세상",
            image : banana
        },
        {
            metaTitle : "바퀴",
            metaDesc : "바퀴",
            image : baque
        },
        {
            metaTitle : "외모지상주의",
            metaDesc : "내면과 외면?",
            image : beauty
        },
        {
            metaTitle : "해치지 않아",
            metaDesc : "동물원에 동물이 없다?",
            image : dont
        },
        {
            metaTitle : "마음의 소리",
            metaDesc : "즐거운 조석의 일상!",
            image : soundOnMind
        },
        {
            metaTitle : "레바툰",
            metaDesc : "레꼬단은 여기 모여라",
            image : reba
        },
    ]
    return(
        <section className ="webtoon-page">
            <div className="webtoon-carousel-container">
                <WebtoonCarousel/>
            </div>
            <div className="webtoon-rank-container">
                <WebtoonRank/>
            </div>
            <div className="webtoon-gene-list">
                <WebtoonList titleName="완결" cardArray= {bestWebtoon} cardSpan={6} cardStyle={bestCardStyleOption} />
                <WebtoonList titleName="신작 연재" cardArray= {newWebtoon} cardSpan={4} cardStyle={cardStyleOption} />
                <WebtoonList titleName="스테디 셀러" cardArray= {newWebtoon} cardSpan={4} cardStyle={cardStyleOption}/>
                <WebtoonList titleName="일상툰" cardArray= {newWebtoon} cardSpan={4} cardStyle={cardStyleOption}/>
                <WebtoonList titleName="판타지 물" cardArray= {newWebtoon} cardSpan={4} cardStyle={cardStyleOption}/>
            </div>
        </section>
    )
}

export default webtoonPage;