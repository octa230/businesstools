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
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name: </Form.Label>
                <Form.Control placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email' >
                <Form.Label>Email: </Form.Label>
                <Form.Control placeholder='email Address'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='company'>
                <Form.Label>Company: </Form.Label>
                <Form.Control placeholder='Company'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='position'>
                <Form.Label>Position: </Form.Label>
                <Form.Control placeholder='Position'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='location'>
                <Form.Label>Area</Form.Label>
                <Form.Control placeholder='location of operation'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder='phone number'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Create Password</Form.Label>
                <Form.Control placeholder='create password'></Form.Control>
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
