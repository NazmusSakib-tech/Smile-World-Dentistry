import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const {registration, error} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegistration = (e) =>{
        console.log(email,password);
        e.preventDefault();
        registration(email, password)
        alert(error);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        
    }

    return (
        <>
            <Card style={{ width: '25rem' }} className="m-auto">
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Register;