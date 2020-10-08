import * as React from 'react'
import './index.css'
import { IWebtoonLIstProps } from '../../data/interface/IWebtoonLIstProps'
import {Card, Row, Col} from 'antd'
const {Meta} = Card;

const WebtoonList : React.FC<IWebtoonLIstProps>  = (props : IWebtoonLIstProps) => {
    return(
        <div className="webtoon-list-container">
            <h2 className="webtoon-list-title">{props.titleName}</h2>
            <Row justify="space-around">
                {
                    props.cardArray.map((value, index ) => {
                        return (
                            <Col span={props.cardSpan} key={index + value.metaTitle} >
                                <Card
                                    hoverable
                                    style={ props.cardStyle }
                                    cover={<img alt="example" src={value.image} style={{height:'250px'}}/>}
                                >
                                    <Meta title={value.metaTitle} description={value.metaDesc} />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default WebtoonList; 