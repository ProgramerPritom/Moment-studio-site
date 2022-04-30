import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    
    return (
        <div>
            <h2 className='text-center my-5'>Your booking package Id No : {serviceId}</h2>
            <div className="process-btn text-center my-3">
            <Link to="/checkout">
            <Button className='' variant='info'>Process to Checkout</Button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
