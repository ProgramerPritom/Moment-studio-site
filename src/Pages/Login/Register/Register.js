import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const refEmail = useRef('');
    const refPassword = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
    const navigate = useNavigate();

    let errorMsg;
    if (error) {
        errorMsg = error.message;
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleSubmitRegister = e =>{
        e.preventDefault();

        const email = refEmail.current.value;
        const password = refPassword.current.value;
        createUserWithEmailAndPassword(email,password);

    }

    const handleGoLogin = () =>{
        navigate('/login');
    }

    return (
        <div>
            <div className="form-area my-3">
            <h2 className='text-center'>Sign Up Here</h2>
        <Form onSubmit={handleSubmitRegister} className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" required/>
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={refEmail} type="email" placeholder="Enter email" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={refPassword} type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
        Sign Up
        </Button>
        {
            error ? 
            <p className='text-center text-danger'>Found Error: {errorMsg}</p>
            : 
            ''}
        <p className='acount-text text-center my-2'>Already have account? <span className='text-account text-primary' onClick={handleGoLogin}>Login here</span></p>
        
        
    </Form>
            </div>
        </div>
    );
};

export default Register;