import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import {  facebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Moment Studio Agency</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis unde, recusandae aut tempore amet.</p>
                        <p><span><font-awesome-icon icon={faHome} /></span></p>

                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;