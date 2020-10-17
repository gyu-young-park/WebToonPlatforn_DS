import React from 'react'
import './index.css'
import {IWebtoonCardProps} from '../../data/interface/IWebtoonCardProprs'
import {Card, Col} from 'antd'
import {Link} from 'react-router-dom'
import { useHistory} from 'react-router-dom'
const {Meta} = Card;
const WebtoonCard : React.FunctionComponent<IWebtoonCardProps> = (props : IWebtoonCardProps ) => {
    const history = useHistory()
    const onWebtoonCardClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        history.push(`/webtoonSpecific/${props.cardIndex}/${props.metaTitle}`)
    }
    return(
        <Col span={props.cardSpan} key={props.cardIndex + props.metaTitle} >
            <Card
                hoverable
                style={ props.cardStyle }
                cover={
                    <img alt="example" src={props.image} style={{height:'250px'}}/>
                }
                onClick={onWebtoonCardClickHandler}
            >
                <Meta title={props.metaTitle} description={props.metaDesc} />
            </Card>
            <Link to={`/webtoonSpecific/${props.cardIndex}/${props.metaTitle}`}></Link>
        </Col>
    )
}

export default WebtoonCard