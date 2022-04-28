import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLink from '../../Shared/SocialLink/SocialLink';
import Loading from '../Loading/Loading';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);


      if (loading || sending) {
          return <Loading></Loading>
      };
      let from = location.state?.from?.pathname || "/";
      if (user) {
        navigate(from, { replace: true });
      };
      let errorMsg;
      if (error || error1) {
          errorMsg = error.message;
      }

    const handleLoginSubmit = (event) =>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email,password);



    };
    const handleForgotPassword = async () =>{
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Email in Inbox');
        }else{
            toast('Enter Email address first');
        }
        
    }

    const handleGoRegister = () =>{
        navigate ('/register');
    }


    return (
        <div>
            <div className="form-area my-3">
            <h2 className='text-center'>First Login please</h2>
        <Form onSubmit={handleLoginSubmit} className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
        Login
        </Button>
        {
            error?
            <p className='text-center text-danger'>Error Found: {errorMsg}</p>
            : ""}
        <p className='acount-text text-center my-2'>New in moment agency family? <span className='text-account text-primary' onClick={handleGoRegister}>Create an Account first</span></p>
        <p className='acount-text text-center my-2'>Forgot your password? <span className='text-account text-danger' onClick={handleForgotPassword}>Get Password</span></p>
        <SocialLink></SocialLink>
        <ToastContainer />
    </Form>
            </div>
        </div>
    );
};

export default Login;