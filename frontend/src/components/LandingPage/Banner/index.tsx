import * as React from 'react'
import colour from './img/colour.jpg'
import curved from './img/cutting.png'
import './index.css'
import {useEffect, useState} from "react";
const Banner = () => {
    const [flag,setFlag]= useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setFlag(true)
        },1000)
    },[])
    return(
        <div className={"banner-container"}>
            {/*<button className={"btn btn-primary"} onClick={() => {setFlag(!flag)}}>btb</button>*/}
            <div className={"banner-text-container"}>
                <div className={`banner-text-title ${flag ? 'fadeIn' : 'fadeOut' }`}>
                    Smart WebToon
                    <br/>
                    Make world better
                </div>
                <div className={`banner-text-content ${flag ? 'fadeIn' : 'fadeOut' }`}>
                    Blockchain WebToon<br/>
                </div>
            </div>
            <img className={`banner-img-container ${flag ? 'fadeIn' : 'fadeOut' }`} src={require("./img/colour.jpg")} />
            <div className={"banner-"}>

            </div>
        </div>
    )
}

export default Banner;