import React,{useContext, useEffect, useState} from 'react';
import{ useNavigate, useLocation,} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async'
import { Store } from '../Store'
import { getError } from '../utils'
import { toast } from 'react-toastify'
import  Axios  from 'axios'


export default function HomeScreen() {

  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/dashboard'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {state, dispatch: ctxDispatch} = useContext(Store)

  const {userToken} = state;

  const submitHandler = async(e)=> {
    e.preventDefault()
    
    try{
      const {data} = await Axios.post('/api/users/signin', {
        email,
        password,
      })

      ctxDispatch({type: 'SIGN_IN', payload: data});
      localStorage.setItem('userToken', JSON.stringify(data))
      navigate(redirect || '/profile')
      console.log('successfully signed in')

    } catch(err){
      console.log(err)
      toast.error(getError(err))
    }
  };

  useEffect(()=> {
    if(userToken){
      navigate(redirect)
    }
  }, [navigate, redirect, userToken])


  return (
    <>
    <Helmet>
      <title>Log-in</title>
    </Helmet>

    <Container className='homeForm'>
          <Form onSubmit={submitHandler}>
            <Form.Text className='p-6'><h1>Sign In To Continue</h1></Form.Text>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type='email' placeholder='Add Email' 
                    onChange={(e) => setEmail(e.target.value)} required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>password: </Form.Label>
                    <Form.Control type='password' placeholder='Add password' 
                    onChange= {(e) => setPassword(e.target.value)} required
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>submit</Button>
            </Form>
    </Container>
    </>
  )
}
