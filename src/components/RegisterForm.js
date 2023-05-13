import React from 'react'
import { Image, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function RegisterForm() {
  return (
    <div className='login-container'>
    <div className="login-header">
        <h1> <Image src={require('../assets/brandLogo.png')} /> Rising Pheonix Education</h1>
    </div>
    <div className="register-form">
        <div className="register-form-header">
           <h2>Register</h2>
           <p>Please complete the form below to register.</p>
        </div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="ex. John Smithd" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            <button className="button" type="submit" onSubmit={()=> {
                <LinkContainer to="/Home"></LinkContainer>
            }}>
             Login
            </button>
        </Form>
    </div>
</div>
  )
}

export default RegisterForm
