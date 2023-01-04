import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'







export default function User() {
  return (
    <Card className='mt-4'>
      <Row>
        <Col xs ={12} md={3}>
        <Image className='rounded form-img' src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='/>
        <span>Employee Name</span>
        </Col>
       {/*  <Col xs={12} md={5}>
          <p>About user / user description</p>
        </Col> */}
        <Col xs={12} md={8}>
          <ListGroup>
            <ListGroup.Item>mervynstunnerqqq@mail.com</ListGroup.Item>
            <ListGroup.Item>Floral Story</ListGroup.Item>
            <ListGroup.Item>Sharjah</ListGroup.Item>
            <ListGroup.Item>Developer</ListGroup.Item>
            <ListGroup.Item>0782144414</ListGroup.Item>
            <ListGroup.Item>Mar-2022</ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={12} md={8} className='p-2'>
                  <Button>Call</Button>
                </Col>
                <Col className='p-2'>
                  <Button>Email</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  )
}
