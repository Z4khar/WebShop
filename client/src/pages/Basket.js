import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import BasketList from "../components/BasketList";
import {fetchOneDevice} from "../http/deviceAPI";

const Basket = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    
                </Col>
                <Col md={9}>
                    <BasketList/>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;
