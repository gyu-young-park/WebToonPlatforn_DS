import React, {useEffect} from 'react'
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
import axios from 'axios'
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
const url ="http://localhost:5000"
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
const WebtoonImagePage : React.FC<IWebtoonImagePageProps> = (props : IWebtoonImagePageProps) => {
    const index = props.match.params.index
    const title =  props.match.params.title
    useEffect(() => {
        fetch(image1)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], '1_1.webp', blob)
            //setSteganoImageFunc(file)
        });
    }, [])
    const setSteganoImageFunc = async (file : File) => {
        let reader = new FileReader()
        reader.onload = async function(event){
            let base64data = event?.target?.result as string
            console.log(base64data)
            let formData = new FormData()
            if(base64data != null){
                formData.append("userImage", base64data)
                formData.append("text", "user")
                const res = await axios.post(url+'/gan/stegano_encode', formData, config)
                console.log(res)
            }
        }
        reader.readAsDataURL(file)
    }
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