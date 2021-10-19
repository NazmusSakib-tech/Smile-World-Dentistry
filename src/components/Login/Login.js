import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle, logIn, } = useAuth()

    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    const  history =  useHistory()

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(() => {
            history.push(redirect_uri)
        })
    }
    const handleLogin = (e) => {
        console.log(email, password);
        e.preventDefault();
        logIn(email, password)
        .then(() => {
            history.push(redirect_uri);
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);

    }

    

    return (
        <>
            <Card style={{ width: '25rem' }} className="m-auto">
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleLogin}>
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
                            LogIn
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <button onClick={handleGoogleLogin}>Google sign in</button>
        </>
    );
};

export default Login;