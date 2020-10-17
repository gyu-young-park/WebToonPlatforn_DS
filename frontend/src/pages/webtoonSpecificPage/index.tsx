import React from 'react'
import './index.css'
import {IWebtoonSpecificProps } from '../../data/interface/IWebtoonSpecificPageProps'
import banana from './img/banana.webp'
import dont from '../webtoon/img/dont.png'
import soundOnMind from '../webtoon/img/soundOnMind.jpg'
import reba from '../webtoon/img/reba.webp'
import satbeal from '../webtoon/img/satbeal.jpg'
import {CardItem} from '../../data/type/cardItem'
import { List, Avatar } from 'antd';
import banana1 from './img/banana/1.jpg'
import banana2 from './img/banana/2.jpg'
import banana3 from './img/banana/3.jpg'
import banana4 from './img/banana/4.jpg'
import banana5 from './img/banana/5.jpg'
import banana6 from './img/banana/6.jpg'
import banana7 from './img/banana/7.jpg'

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

const data = [
    {
      index : '1',
      title: '취직하는 만화',
      date: '17.03.23',
      image: banana1,
    },
    {
        index : '2',
      title: '룸메이트 + 편의점과 외국인',
      date: '17.03.30',
      image: banana2,
    },
    {
        index : '3',
      title: '고양이 만지는 이야기',
      date: '17.04.06',
      image: banana3,
    },
    {
        index : '4',
      title: '센치한 일기 + 지하철 이야기',
      date: '17.04.13',
      image: banana4,
    },
    {
        index : '5',
        title: '김장 이야기',
        date: '17.04.20',
        image: banana5,
    },
    {
        index : '6',
        title: '동생의 외박',
        date: '17.04.27',
        image: banana6,
    },
    {
        index : '7',
        title: '또치 이야기',
        date: '17.05.04',
        image: banana7,
    },
      
  ];
  
const WebtoonSpecificPage = (props : IWebtoonSpecificProps) => {
    const index = props.match.params.id
    const title = props.match.params.name


    return (
        <div className="webtoon-specific-page-container">
            <div className="webtoon-specific-page-left-container">
                <div className="webtoon-specific-page-left-img-container">
                    <img className="webtoon-specific-page-left-image" src={banana}/>
                </div>
                <div className="webtoon-specific-page-left-content">
                    <h2 className="webtoon-specific-page-left-content-title">{title}</h2>
                    <div className="webtoon-specific-page-left-content-btns1">
                        <a id="webtoon-specific-jjim-btn"><i className="fa fa-heart"></i> 찜하기</a>
                        <a id="webtoon-specific-like-btn"><i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
                        <a id="webtoon-specific-dislike-btn"><i className="fa fa-thumbs-down" aria-hidden="true"></i></a>
                    </div>
                    <div className="webtoon-specific-page-left-content-explain">
                        <h3 id="webtoon-specific-page-left-content-explaination">기상천외한 와나나의 세상</h3>
                    </div>
                    <div className="webtoon-specific-page-left-content-btns2">
                        <a id="webtoon-specific-purchase-btn">전체구매</a>
                        <a id="webtoon-specific-first-episode-btn">첫 화 보기</a>
                    </div>
                </div>
            </div>
            <div className="webtoon-specific-page-right-container">
                <h3>연재 리스트</h3>
                <List
                    
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item className="webtoon-specific-page-right-list-item">
                        <List.Item.Meta
                        avatar={<img className="webtoon-specific-page-right-list-item-avatar" src={item.image} />}
                        title={<a href={`/webtoonImagePage/${item.index}/${title}`}>{item.index+"화"}<br/>{item.title}</a>}
                        description={
                            <div className="webtoon-specific-page-right-list-item-desc">
                                <div>{item.date}</div>
                                <div>3 KLAY</div>
                            </div>
                        }
                        />
                    </List.Item>
                    )}
                />,
            </div>
        </div>

    )
}

export default WebtoonSpecificPage;