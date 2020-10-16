import React, {useState} from 'react'
import './index.css'
import {Radio} from 'antd'
import {CardItem} from '../../data/type/cardItem'
import WebtoonList from '../WebtoonList'
import banana from '../../pages/webtoon/img/banana.webp'
import dont from '../../pages/webtoon/img/dont.png'
import soundOnMind from '../../pages/webtoon/img/soundOnMind.jpg'
import reba from '../../pages/webtoon/img/reba.webp'
import satbeal from '../../pages/webtoon/img/satbeal.jpg'

const cardStyleOption = {
    width: '200px',
    marginLeft: '5px',
    marginRight: '5px',
    height: '100%'
}

const rankWebtoon : CardItem[] = [
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
        image :reba
    },
    {
        metaTitle : "편의점 샛별이",
        metaDesc : "드라마보다 재밌는 웹툰",
        image : satbeal
    }
]

const WebtoonRank  = () => {
    const [rankName, setRankName] = useState<string>('전체')
    function onChange(e : any) {
        console.log(`radio checked:${e.target.value}`);
        setRankName(e.target.value)
    }
    return(
        <div className = "webtoon-genre-container">
            <div className="webtoon-genre-title">
                <h5 className="webtoon-genre-desc">가장 인기있는 작품</h5>
                <h2 className="">실시간 작품 랭킹!</h2>
            </div>
            <div className="webtoon-genre-list">
                <Radio.Group className="radio-button-group" onChange={onChange} defaultValue="a" buttonStyle="solid">
                    <Radio.Button className="radio-button" value="전체">전체</Radio.Button>
                    <Radio.Button className="radio-button" value="판타지">판타지</Radio.Button>
                    <Radio.Button className="radio-button" value="일상">일상</Radio.Button>
                    <Radio.Button className="radio-button" value="공포">공포</Radio.Button>
                    <Radio.Button className="radio-button" value="미스테리">미스터리</Radio.Button>
                    <Radio.Button className="radio-button" value="개그">개그</Radio.Button>
                    <Radio.Button className="radio-button" value="드라마">드라마</Radio.Button>
                </Radio.Group>
            </div>   
            <div className="webtoon-rank-group">
                <div className="webtoon-rank-desc">
                    <h2>{<span style={{color:'red'}}>{rankName}</span>} 순위</h2>
                    <h3>BEST 5</h3>
                    <h5 className="webtoon-genre-desc">재미있는 작품들을 먼저 만나보세요</h5>
                    <h4></h4>
                </div>
                <div className="webtoon-rank-card-group">
                    <WebtoonList titleName="" cardArray= {rankWebtoon} cardSpan={4} cardStyle={cardStyleOption}/>
                </div>
            </div>
        </div>
    )
}

export default WebtoonRank