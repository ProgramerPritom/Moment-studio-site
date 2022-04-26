import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer-area text-white">
                <div className="row">
                    <div className="col-md-4 text-center mt-3">
                        <h4>Moment Studio Agency</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis unde, recusandae aut tempore amet.</p>
                        <p><span>Copyrights by Moment Agency &copy; 2022</span></p>

                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2 mt-2">
                        <p>About</p>
                        <p>Blogs</p>
                        <p>Services</p>
                        <p>Contact us</p>
                    </div>
                    <div className="col-md-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;