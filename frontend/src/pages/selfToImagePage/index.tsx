import * as React from 'react'
import Explainations from '../../components/Explainations'
import DropBox from '../../components/DropBox'
import './index.css'
const selfToImagePage = () => {
    return(
        <section className="self2image">
            <Explainations/>
            <a id="bottom"></a>
            <DropBox/>
        </section>
    )
}

export default selfToImagePage;