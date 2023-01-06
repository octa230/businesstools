import React from 'react'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card'
import {PencilFill} from 'react-bootstrap-icons'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/esm/Image'
import Button from 'react-bootstrap/esm/Button'




export default function Expense() {
  return (
    <ListGroup.Item className='mt-3'>
        <Row className='d-flex justify-content-center'>
        <Col className='mt-2' xs={12} md={3}>
            AED: 120
            <Card.Footer>
                2 days ago
            </Card.Footer>
        </Col>
        <Col className='mt-2' xs={12} md={3}>
           fuel to Jumeirah Beach Event
        </Col>
        <Col className='mt-2' xs={12} md={3}>
            <Button variant='dark' href='/edit-expense'>
            <PencilFill />
            </Button>
        </Col>
        <Col className='mt-2' xs={12} md={3}>
            <Image className='img-thumbnail' src='https://media-cdn.tripadvisor.com/media/photo-s/11/22/b2/6a/bill.jpg'/>
        </Col>

        </Row> 
    </ListGroup.Item>
  )
}
