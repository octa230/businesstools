import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function HomeScreen() {
  return (

    <Container className='p-4 my-4 homeForm'>
          <Form>
            <Form.Text className='p-6'><h1>Sign In To Continue</h1></Form.Text>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type='email' placeholder='Add Email'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>password: </Form.Label>
                    <Form.Control type='email' placeholder='Add password'></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>submit</Button>
            </Form>
    </Container>
  )
}