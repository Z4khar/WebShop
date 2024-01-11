import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {BASKET_ROUTE} from "../utils/consts";
import axios from 'axios';
import {useParams} from 'react-router-dom'



const BasketItem = ({device}) => {
    const history = useHistory()
   
    return (
        <Col md={3} className={"mt-3"}onClick={() => history.push(BASKET_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default BasketItem;
