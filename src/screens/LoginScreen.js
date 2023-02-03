import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form,Button,Row,Col, FormGroup } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { Redirect } from 'react-router-dom'



function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()

    const dispatch =useDispatch()
    const redirect = location.state ? Number(location.state) : '/'
    const userLogin = useSelector(state => state.userLogin)
    const {error,loading,userInfo} =userLogin
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }

    }, [navigate,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))
    }
    return (
    <FormContainer>
        <h1>Sign In</h1>

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <FormGroup controlId='email'>
                <Form.Label> Email Address</Form.Label>

                <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </FormGroup>

            <FormGroup controlId='password'>
                <Form.Label> Password</Form.Label>

                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </FormGroup>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
                New Customer?<Link to={redirect ? `/register?redirect=${redirect}`:`/register`}>
                Register
            </Link>
            </Col>

        </Row>
    </FormContainer>
  )
}

export default LoginScreen