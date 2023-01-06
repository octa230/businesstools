import React from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { Trash } from 'react-bootstrap-icons'

export default function EditExpense() {
  return (

    <>
    <Header 
    title={'Tools Dashboard'}
    link1={'invetory'}
    link2={'Team'}
    link3={'Profile'}
    dropdown={'Account'}
    dropdownLink1={'Sign Out'}
    dropdownLink2={'Add Expense'}
    dropdownLink3={'Edit Profile'}
    />
    <Container className='homeForm'>
        <Row>
        <Col>
        <Form>
        <Form.Text className='d-flex justify-content-center'>
            <h1>Edit Expense</h1>
            </Form.Text>
        <Form.Group className='mt-3' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder='Title'/>
        </Form.Group>
        <Form.Group className='mt-3' controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control placeholder='category'/>
        </Form.Group>
        <Form.Group className='mt-3' controlId='photo'>
            <Form.Label>Photo</Form.Label>
            <Form.Control type='file' placeholder='Title'/>
        </Form.Group>
        <Form.Group className='mt-3' controlId='otherImages'>
            <Form.Label>Other Images</Form.Label>
            <Form.Control type='file' placeholder='other Images'/>
        </Form.Group>
        <Form.Group className='mt-3' controlId='amount'>
            <Form.Label>Amount</Form.Label>
            <Form.Control placeholder='amount'/>
        </Form.Group>
        <Form.Group className='mt-3' controlId='amount'>
            <Form.Label>Notes</Form.Label>
            <Form.Control as='textarea' aria-label='notes'/>
        </Form.Group>
        <Button className='mt-3' type='submit' variant='success'>Update</Button>
        <Button className=' mx-5 mt-3' type='submit' variant='success'>
            <Trash />
        </Button>

      </Form>
        </Col>
        </Row>

    </Container>  
    </>
  )
}
