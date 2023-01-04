import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/esm/Button';
import Header from './Header';

export default function Profile(props) {
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
  
    <Container fluid className='mt-4'>
      <Row>
        <Col xs={12} md={3}>
            <Image className='rounded form-img' src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='/>
        <span>Employee Name</span>
        </Col>
        <Col xs={12} md={5}>
            <p>About user/ user description</p>
        </Col>
        <Col xs={12} md={4}>
            <ListGroup>
                <ListGroup.Item>user@email.com</ListGroup.Item>
                <ListGroup.Item>Company</ListGroup.Item>
                <ListGroup.Item>Location</ListGroup.Item>
                <ListGroup.Item>Position</ListGroup.Item>
                <ListGroup.Item>Phone</ListGroup.Item>
                <ListGroup.Item>Join Date</ListGroup.Item>
         {/*        <ListGroup.Item>
                    <Row>
                    <Col xs={8} md={6} className='p-2'>
                    <Button>Follow</Button>
                    </Col>
                    <Col className='p-2'>
                    <Button>UnFollow</Button>
                    </Col>

                    </Row>
                </ListGroup.Item>     */}                
            </ListGroup>
        </Col>
      </Row>
    </Container>
    </>
  )
}
