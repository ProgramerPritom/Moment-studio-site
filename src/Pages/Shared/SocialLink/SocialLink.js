import React from 'react';
import './SocialLink.css';
import googleLogo from '../../../images/Social/google.png';
import facebookLogo from '../../../images/Social/facebook.png';
import githubLogo from '../../../images/Social/github.png';

const SocialLink = () => {
    return (
        <div>
            <div className="social-link-area d-flex align-items-center">
                <div className='line-first w-50 bg-primary'></div>
                <div className='mt-2 px-2'>Try one</div>
                <div className='line-secend w-50 bg-primary'></div>
            </div>
            <div className="button-area">
                <button className='btn btn-info w-50 d-block mx-auto mb-2 mt-2'>
                    <img style={{width:"25px"}} className='mx-2' src={googleLogo} alt="" />
                    Google</button>
                <button className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{width:"25px"}} className='mx-2' src={facebookLogo} alt="" />
                    Facebook</button>
                <button className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{width:"25px"}} className='mx-2' src={githubLogo} alt="" />
                    Github</button>
            </div>
        </div>
    );
};

export default SocialLink;