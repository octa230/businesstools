import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/esm/Form'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Header from '../../components/Header'
import Expense from '../../components/Expense'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Button from 'react-bootstrap/esm/Button'





export default function AddExpense() {
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

    <Container>
      <Row>
        <Col className='p-4' xs={12} md={4}>
        <Form>
        <Form.Text className='d-flex justify-content-center'>
            <h1>Add Expense</h1>
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
        <Button className='mt-3' type='submit' variant='secondary'>submit</Button>
      </Form>
        </Col>
        <Col className='p-4' xs={12} md={7}>
        <Form.Text className='d-flex justify-content-center'>
            <h1>My Expenses</h1>
        </Form.Text>
        <ListGroup className='d-flex justify-content-center'>
            <Expense/>
            <Expense />
            <Expense />
            <Expense />
        </ListGroup>
        </Col>
      </Row>
    </Container>
    </>
  )
}

