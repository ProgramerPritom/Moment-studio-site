import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();


    const handleGoLogin = () =>{
        navigate('/login');
    }

    return (
        <div>
            <div className="form-area my-3">
            <h2 className='text-center'>Sign Up Here</h2>
        <Form className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
        Sign Up
        </Button>
        <p className='acount-text text-center my-2'>Already have account? <span className='text-account text-primary' onClick={handleGoLogin}>Login here</span></p>
        
        
    </Form>
            </div>
        </div>
    );
};

export default Register;