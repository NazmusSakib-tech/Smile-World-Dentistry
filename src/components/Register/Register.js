import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Register.css'



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
        .then((result) => {
            const user = result?.user;
            if(user){
                history.push(redirect_uri)
            }
           
        })
    }
    
    const handleRegistration = () =>{
        console.log(email,password,name);
        registration(email, password, name)
        .then(() => {
            // history.push(redirect_uri);
            alert("SuccesFully! Register, Now Login")
            setcheckbox(false)
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
            <Container className="my-4">
            <Card  className="m-auto " style={{width:"80%"}}>
                <Card.Body className="p-3 m-auto">
                    <h2 className="text-center mb-4">{checkbox===false? "Login" : "Register"}</h2>
                    <Form onSubmit={(e)=> {e.preventDefault(); checkbox ===false? handleLogin(): handleRegistration()}}>

                    {checkbox ===false? "" :<Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleName} type="text" className="pe-2"  placeholder="Enter Name" required />
                            
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
                            <Form.Control onBlur={handlePassword} type="password"  placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={handleCheckBox} type="checkbox" className="text-primary" label="Is New User?" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mb-2">
                        <i class="fas fa-sign-in-alt"></i> {checkbox ===false? "Login": "Register"}
                        </Button>
                    </Form>
                    <Button onClick={handleGoogleLogin}><i class="fab fa-google"></i> Google SignIn</Button>
                </Card.Body>
                <p className="text-danger">{error}</p>
            </Card>
            </Container>
            
        </>
    );
};

export default Register;