import React from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { CloudUpload, Trash } from 'react-bootstrap-icons'
import { ButtonGroup } from 'react-bootstrap'

export default function EditExpense() {
  return (

    <>
    <Header 
    title={'Tools Dashboard'}
    link1={'Invetory'}
    link2={'Community'}
    link3={'Profile'}
    link4={'Add Employee'}
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
        <ButtonGroup gap={2} className='d-flex space-evenly'>
        <Button className='mt-3' type='submit' variant='success'>
            <CloudUpload />{' '}
            Update
        </Button>
        <Button className='mt-3' type='submit' variant='danger'>
            <Trash /> delete
        </Button>
        </ButtonGroup>

      </Form>
        </Col>
        </Row>

    </Container>  
    </>
  )
}
