import { } from 'bootstrap';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    const {id,name,price,description,img} = service;
    const navigate = useNavigate()
    const handleServiceBtn = (id) =>{
        
        navigate(`/service/${id}`);
        // console.log(e);
        
    }
    

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
            <Button onClick={() => handleServiceBtn(id)} variant="primary">Book a Day</Button>
        </Card.Body>
        </Card>
            </div>
        </div>
            );
        };

export default Service;