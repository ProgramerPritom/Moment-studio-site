import React from 'react';
import './Story.css';
import storyImg from '../../../images/777.jpg';
import { Button } from 'react-bootstrap';

const Story = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${storyImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            height:'400px'
            
            
        
        }}className="story-area my-2">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                    
                </div>
                <div className="col-md-6 text-center my-5 text-white">
                    <p>Get Started</p>
                    <h3>Make your Wedding a Wonderful story.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat non sapiente inventore, numquam ratione consectetur!</p>
                    <Button>Get a Package</Button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;