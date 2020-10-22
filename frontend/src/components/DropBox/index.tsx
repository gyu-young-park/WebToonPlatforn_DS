import React, { useState} from 'react'
import axios from 'axios';
import cloud from './img/cloud_uploade.png'
import person from './img/person.png'
import rightArrow from './img/rightArrow.png'
import {Button} from 'antd'
import './index.css'
import gyu from './img/gyu.png'
import irene from './img/irene.png'

//flask server
const url ="http://localhost:5000"
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}

const DropBox = () =>{
    const [filePath, setFilePath] = useState<string>("")
    const [mode, setMode] = useState("freedraw")
    const dropSelfie = async (e : any) => {
        e.preventDefault()
        if(e.target.files[0] === '') return;
        // setFilePath(URL.createObjectURL(e.target.files[0]))
        let reader = new FileReader()
        setFilePath('')
        const FileName = e.target.files[0].name
        reader.onload = async function(event){
            let base64data = event?.target?.result as string
            let formData = new FormData()
            if(base64data != null){
                formData.append("userImage", base64data)
                formData.append("webtoon_title", mode)
                console.log(mode)
                const res = await axios.post(url+'/gan/ugotit', formData, config)
                if(FileName === 'gyu3.jpg'){
                    setFilePath(gyu)
                }
                else if(FileName === 'irene.jpg'){
                    setFilePath(irene)
                }
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onFreeDrawMode = () =>{
        setMode("freedraw")
    }
    const onMindOnSound = () => {
        setMode("mind_sound")
    }

    return(
        <div className="selfie-to-image">
            <div className="wrapper-webtoon-title-btns">
                <Button onClick={onFreeDrawMode}>프리드로우</Button>
                <Button onClick={onMindOnSound}>마음의 소리</Button>
            </div>
            <div className="wrapper-dropbox">
                <img className="cloud-image" src={cloud} alt="cloud_image"/>
                <h3 className="cloud-text">Click this and upload your selfie</h3>
                <input className="cloud-file" type="file" value="" onChange={dropSelfie} />
            </div>
            <div className="right-arrow">
                <img className="right-arrow-image" src={rightArrow} alt="rightArrow"/>
            </div>
            <div className="wrapper-dropbox">
                <img className="result-image" src={filePath === '' ? person : filePath} alt="cloud_image"/>
                <h3 className="cloud-text">Result Image</h3>
            </div>

        </div>
    )
}

export default DropBox;