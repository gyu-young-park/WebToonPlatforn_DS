import React from 'react'
import './index.css'
import {IWebtoonImagePageProps} from '../../data/interface/IWebtoonImagePageProps'
import image1 from './img/1_1.webp'
import image2 from './img/1_2.webp'
import image3 from './img/1_3.webp'
import image4 from './img/1_4.webp'
import image5 from './img/1_5.webp'
import image6 from './img/1_6.webp'
import image7 from './img/1_7.webp'
import image8 from './img/1_8.webp'
import image9 from './img/1_9.webp'
import image10 from './img/1_10.webp'

const datas = [
    {
        seq: 1,
        image : image1
    },
    {
        seq: 2,
        image : image2
    },
    {
        seq: 3,
        image : image3
    },
    {
        seq: 4,
        image : image4
    },
    {
        seq: 5,
        image : image5
    },
    {
        seq: 6,
        image : image6
    },
    {
        seq: 7,
        image : image7
    },
    {
        seq: 8,
        image : image8
    },
    {
        seq: 9,
        image : image9
    },
    {
        seq: 10,
        image : image10
    },
]

const WebtoonImagePage : React.FC<IWebtoonImagePageProps> = (props : IWebtoonImagePageProps) => {
    const index = props.match.params.index
    const title =  props.match.params.title
    return(
        <div className="webtoon-image-page-container">
            {
                datas.map((value, index) => {
                    return(
                        <div className="webtoon-image-page-image">
                            <img src={value.image} alt={value.seq + "번"}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WebtoonImagePage