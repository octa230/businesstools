import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'


export default function SignupUser() {
  return (
    <Container className='signupForm'>
        <Form>
            <Form.Text>
                <h1>Add New User</h1>
            </Form.Text>
            <Form.Group className='mb-3'>
                <Form.Label>Name: </Form.Label>
                <Form.Control controlId='name' placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email: </Form.Label>
                <Form.Control controlId='email' placeholder='email Address'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Company: </Form.Label>
                <Form.Control controlId='company' placeholder='Company'/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Area</Form.Label>
                <Form.Control controlId='location' placeholder='location of operation'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Phone</Form.Label>
                <Form.Control controlId='phone' placeholder='phone number'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Create Password</Form.Label>
                <Form.Control controlId='password' placeholder='create password'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Role</Form.Label>
                <Form.Group type='checkbox'>
                    <Form.Check type='switch' id='employee' label='Administrator'/>
                </Form.Group>
            </Form.Group>
            <Button variant='primary' type='submit'>Add employee</Button>
        </Form>
      
    </Container>
  )
}
