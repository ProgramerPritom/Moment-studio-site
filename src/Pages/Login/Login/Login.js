import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLink from '../../Shared/SocialLink/SocialLink';
import Loading from '../Loading/Loading';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (loading) {
          return <Loading></Loading>
      };

      if (user) {
          navigate('/home');
      };
      let errorMsg;
      if (error) {
          errorMsg = error.message;
      }

    const handleLoginSubmit = (event) =>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email,password);



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
        <p className='acount-text text-center my-2'>Forgot your password? <span className='text-account text-danger'>Get Password</span></p>
        <SocialLink></SocialLink>
    </Form>
            </div>
        </div>
    );
};

export default Login;