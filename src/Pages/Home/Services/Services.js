import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="services-area my-3">
                <div className="services-text text-center my-2">
                    <h1>Our Focus Services</h1>
                    
                </div>
                <p className='text-center'>Get to our best service. Photographers record events and tells stories using images. </p>
                <div className="services">
                    {
                        services.map(service => <Service
                             key={service.div}
                             service = {service}
                             ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;