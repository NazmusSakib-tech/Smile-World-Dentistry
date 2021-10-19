import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    const  history =  useHistory();


    const {registration, error, logIn, signInUsingGoogle} = useAuth();

    const [name, setName,] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setcheckbox] = useState(false);

    const handleCheckBox= (e) => {
        setcheckbox(e.target.checked);
    }


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(() => {
            history.push(redirect_uri)
        })
    }


    const handleLogin = () => {
        console.log(email, password);
        logIn(email, password)
        .then(() => {
           history.push(redirect_uri)
        })
    }
    
    const handleRegistration = () =>{
        console.log(email,password,name);
        registration(email, password, name)
        .then(() => {
            history.push(redirect_uri);
        })
    }
    const handleName = (e) =>{
        setName(e.target.value);
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
                    <h2 className="text-center mb-4">{checkbox===false? "Login" : "Register"}</h2>
                    <Form onSubmit={(e)=> {e.preventDefault(); checkbox ===false? handleLogin(): handleRegistration()}}>

                    {checkbox ===false? "" :<Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" required />
                            
                        </Form.Group>}

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
                            <Form.Check onClick={handleCheckBox} type="checkbox" label="New User?" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                         <p>{console.log(error)}</p> 
                    </Form>
                    {checkbox ===false? <Button onClick={handleGoogleLogin}>Google SignIn</Button> : ""}
                </Card.Body>
            </Card>
            
        </>
    );
};

export default Register;