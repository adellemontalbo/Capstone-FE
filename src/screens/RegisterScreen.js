import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form,Button,Row,Col, FormGroup } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const location = useLocation()

    const dispatch =useDispatch()
    const redirect = location.state ? Number(location.state) : '/'
    const userRegister = useSelector(state => state.userRegister)
    const {error,loading,userInfo} =userRegister
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }

    }, [navigate,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(password != confirmpassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name,email,password))
        }
    }
    return (
    <FormContainer>
        <h1>Sign In</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <FormGroup controlId='name'>
                <Form.Label> Name</Form.Label>

                <Form.Control required type='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </FormGroup>

            <FormGroup controlId='email'>
                <Form.Label> Email Address</Form.Label>

                <Form.Control required type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <FormGroup controlId='password'>
                <Form.Label> Password</Form.Label>

                <Form.Control required type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <FormGroup controlId='passwordConfirm'>
                <Form.Label> Confirm Password</Form.Label>

                <Form.Control required type='password' placeholder='Confirm password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <Button type='submit' variant='primary'>
                Register
            </Button>
            <Row className='py-3'>
            <Col>
                Have an Account?<Link to={redirect ? `/login?redirect=${redirect}`:`/login`}>
                Sign In
            </Link>
            </Col>

        </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen