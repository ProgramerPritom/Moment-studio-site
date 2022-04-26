import { } from 'bootstrap';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {name,price,description,img} = props.service;
    return (
        <div>
            <div className="service-card">
        <Card >
            <Card.Img style={{height: "270px"}} variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <p>Price: $<span>{price}</span></p>
            <Button variant="primary">Book a Day</Button>
        </Card.Body>
        </Card>
            </div>
        </div>
            );
        };

export default Service;