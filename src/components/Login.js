import React from 'react'
import {  Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'

function Login() {
  return (
    <div className='login-container'>
        <div className="login-header">
            <h1> <Image src={require('../assets/brandLogo.png')} /> Rising Pheonix Education</h1>
        </div>
        <div className="login-form">
            <div className="login-form-header">
               <h2>Sign In</h2>
               <p>Please log in with your registered credentials.</p>
            </div>
            <Form>
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
                    <LinkContainer to="/Register"></LinkContainer>
                }}>
                 Login
                </button>
            </Form>
        </div>
    </div>
  )
}

export default Login
