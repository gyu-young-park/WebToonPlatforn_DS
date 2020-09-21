import * as React from 'react'
import Main from './Main/index'
import About from './About/index'
import Information from './Infomation/index';
import Team from './Team/index';
const LandingPage = () => {
    return(
        <div>
            <Main/>
            <About/>
            <Information/>
            <Team/>
        </div>
    )
}

export default LandingPage;