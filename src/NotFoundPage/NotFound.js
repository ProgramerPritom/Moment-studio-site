import React from 'react';
import './NotFound.css';
import notFound from '../../src/images/404.png';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="img-area text-center">
                            <img src={notFound} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="text-area mt-5">
                        <h2>Oopsss....</h2>
                        <h5>Page Not Found!!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;