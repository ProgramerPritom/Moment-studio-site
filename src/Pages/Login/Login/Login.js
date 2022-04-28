import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLink from '../../Shared/SocialLink/SocialLink';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();


    const handleGoRegister = () =>{
        navigate ('/register');
    }


    return (
        <div>
            <div className="form-area my-3">
            <h2 className='text-center'>First Login please</h2>
        <Form className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
        Login
        </Button>
        <p className='acount-text text-center my-2'>New in moment agency family? <span className='text-account text-primary' onClick={handleGoRegister}>Create an Account first</span></p>
        <p className='acount-text text-center my-2'>Forgot your password? <span className='text-account text-danger'>Get Password</span></p>
        <SocialLink></SocialLink>
    </Form>
            </div>
        </div>
    );
};

export default Login;