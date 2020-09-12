import * as React from 'react';
import {Button, Card} from "react-bootstrap";
import './index.css'
interface FeatureCardProps{
    img : string,
    title : string,
    desc: string
}

const FeatureCard : React.FunctionComponent<FeatureCardProps> = (props) => {
    return(
        <Card className={"feature-card-container"} style={{ width: '18rem', border:'none'}}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body className={"feature-card-body"}>
                <Card.Title className={"feature-card-body-tile"}>{props.title}</Card.Title>
                <Card.Text className={"feature-card-body-text"}>
                    {props.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FeatureCard

