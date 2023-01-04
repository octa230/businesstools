import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header  from '../../components/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'

export default function Dashboard() {
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
    <Container fluid className='dashboard'>
        <Row className='justify-content-center'>
            <Col className='posts-column' xs={12} md={3}>my posts</Col>
            <Col xs={12} xl={5} className='mt-3 p-4 justify-content-center dashboard-center'>

<Form.Text>
    <h1>Make Post</h1>
</Form.Text>
                <FloatingLabel>
                    <Form.Control as='textarea' placeholder='make post' style={{height:'100px'}} />                    
                </FloatingLabel><br />
<Form.Text>
    <h5>Write Broadcast or General message</h5>
</Form.Text>
                <FloatingLabel
                controlId='makepost'
                lable='Make broadcast'
                className='mb-3'
                >
                <Form.Control as='textarea' placeholder='Make general post'/>
                    
                </FloatingLabel>

            </Col>
            <Col xs={12} xl={4}>following</Col>
        </Row>
        
    </Container>
    </>

  )
}