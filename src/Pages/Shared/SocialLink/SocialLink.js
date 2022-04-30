import React from 'react';
import './SocialLink.css';
import googleLogo from '../../../images/Social/google.png';

import githubLogo from '../../../images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Login/Loading/Loading';

const SocialLink = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let from = location.state?.from?.pathname || "/";
    if (user || user1) {
        navigate(from, { replace: true })
    }
    if(loading || loading1){
        return <Loading></Loading>
    }
    let ErrorMessage;
    if (error || error1) {
        ErrorMessage = <div>
        <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    </div>
    }

   

    return (
        <div>
            <div className="social-link-area d-flex align-items-center">
                <div className='line-first w-50 bg-primary'></div>
                <div className='mt-2 px-2'>Try one</div>
                <div className='line-secend w-50 bg-primary'></div>
            </div>
            {ErrorMessage}
            <div className="button-area">
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto mb-2 mt-2'>
                    <img style={{width:"25px"}} className='mx-2' src={googleLogo} alt="" />
                    Google</button>
                
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{width:"25px"}} className='mx-2' src={githubLogo} alt="" />
                    Github</button>
            </div>
        </div>
    );
};

export default SocialLink;