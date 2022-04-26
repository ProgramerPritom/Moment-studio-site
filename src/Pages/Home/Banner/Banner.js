import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../../images/banner-camera.jpg';

const Banner = () => {
    return (
        <div>
            <div className="banner-area mt-4 mb-2">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Best Event Package</h2>
                            <p>An event photographer is very good at what they do, knowing what is most important to you will go a long way in getting the best shots. We recommend you have an idea of specific parts of the venue and activities during your event that you want the photographer to pay special attention to. Also, don't be afraid to approach the photographer and ask them for a photo of something happening, they will be happy to accommodate you!</p>
                            <Button variant='primary'>See our Gellary</Button>
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid img-thumbnail' src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;