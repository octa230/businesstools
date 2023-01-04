import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import Header from '../../components/Header'


export default function CreateProduct() {
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
    <Container className='createProduct'>
        <Form>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name: </Form.Label>
                <Form.Control placeholder='product name'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>Price: </Form.Label>
                <Form.Control placeholder='product price'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='code'>
                <Form.Label>Code: </Form.Label>
                <Form.Control placeholder='product code'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='stock'>
                <Form.Label>Stock: </Form.Label>
                <Form.Control placeholder='in stock count'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='image'>
                <Form.Label>Image: </Form.Label>
                <Form.Control placeholder='product Image'  type='file'/>
            </Form.Group>
            <Button type='submit'>Done</Button>

        </Form>

    </Container>
      
    </>
  )
}
