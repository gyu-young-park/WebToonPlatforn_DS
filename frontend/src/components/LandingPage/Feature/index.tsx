import * as React from 'react'
import './index.css'
import FeatureCard from "./FeatureCard";
import AI from './img/AI.png'
import block from './img/blockchain.png'
import cartoon from './img/cartoon.jpg'

const Feature = () => {
    return(
        <div className={"feature-container"}>
            <div className={"feature-wrapper container"}>
                <div className={"feature-title"}>
                    <div className={"feature-title-small"}>WHAT IS THE FEATURE</div>
                    <div className={"feature-title-large"}>Meet the feature of our web</div>
                </div>
                <div className={"feature-elements d-sm-flex justify-content-around"}>
                    <div className={"feature-element"}>
                        <FeatureCard img={cartoon} desc={'그 어디에서도 만날 볼 수 없었던 웹툰을 만나보세요'} title={'WebToon'}/>
                    </div>
                    <div className={"feature-element"}>
                        <FeatureCard img={block} desc={'블록체인으로 만들어진 웹 플랫폼을 통해 수수료 없이 웹툰 활동을 하세요!'} title={'BockChain'}/>
                    </div>
                    <div className={"feature-element"}>
                        <FeatureCard img={AI} desc={'웹툰뿐만 아니라 보다 더 재밌는 컨텐츠를 AI를 통해 제공해줍니다.'} title={'AI'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature;