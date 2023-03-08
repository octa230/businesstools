import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import { Store } from '../Store';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import {ButtonGroup, Card, ListGroup, Form} from 'react-bootstrap/esm/'
import Button from 'react-bootstrap/esm/Button';
import Text from 'react-bootstrap/esm/FormText'
import Header from './Header';
import { PencilFill, Superscript } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet-async';
import {useNavigate, useParams } from 'react-router-dom';


function reducer(state, action){
  switch(action.type){
    case'REFRESH_PROFILE':
      return {...state, profile: action.payload}
    case 'CREATE_REQUEST':
      return {...state, laodingcreateComment: true}
    case 'REQUEST_SUCCESS':
      return {...state, laodingcreateComment: false}
    case 'CREATE_FAIL':
      return {...state, laodingcreateComment: false}
    case 'FETCH_REQUEST':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      return {...state, profile: action.payload, loading: false}
    case 'FETCH_FAIL':
      return {...state, loading:false, error: action.payload}
    default:
      return state
  }
}





export default function Profile(props) {

  let commentsRef = useRef()

  const[comment, setComment] = useState(0);
  const[selectMonth, setSelectedMonth ] = useState('')

  const navigate = useNavigate()
  const params = useParams()
  const {_id: profileId} = params
  const date = new Date()
  const month = date.getMonth()+ 1
  const day = date.getDate() 

 
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {userToken} = state;

  return (
    <>
    <Helmet>
      <title>profile</title>
    </Helmet>
    <Header 
    title={'Tools Dashboard'}
    link1={'Invetory'}
    link2={'Community'}
    link3={'Profile'}
    link4={'Create Product'}
    link5={'Add Employee'}
    dropdown={'Account'}
    dropdownLink1={'Sign Out'}
    dropdownLink2={'Add Expense'}
    dropdownLink3={'Edit Profile'}
    />
  
    <Container fluid className='mt-4'>
      <Row>
        <Col xs={12} md={3}>
          <Card>
            <Card.Header  className='d-flex edit-profile'>
            <Image className='rounded form-img' 
            src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='/>
    
        <Button variant='' href='/edit-profile'>
            <PencilFill />
            {' '}Edit profile
            </Button>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Text className='d-flex justify-center'>
                  <h5>Check In Register -year: {date.getFullYear()}</h5>
                </Form.Text>
                <Row className='mt-2'>
                  <Form.Group as={Col} controlId='InTime'>
                    <Form.Label>In Time</Form.Label>
                    <Form.Control/>
                  </Form.Group>
                  <Form.Group as={Col} controlId='OutTime'>
                    <Form.Label>Out Time</Form.Label>
                    <Form.Control/>
                  </Form.Group>
                </Row>
                <Row className='mt-2'>
                  <Form.Group as={Col} controlId='Month'>
                    <Form.Label>Month: {month}</Form.Label>
                    <Form.Control/>
                  </Form.Group>
                  <Form.Group as={Col} controlId='Year'>
                    <Form.Label>Day: {day}</Form.Label>
                    <Form.Control/>
                  </Form.Group>
                </Row>
                <Button className='mt-2'  size='sm' variant='secondary'>
                  submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className='mt-3'>
            <Card.Header>
              My Todo List
            </Card.Header>
            <Card.Body>
              <ListGroup flush>
                <ListGroup.Item>action1</ListGroup.Item>
                <ListGroup.Item>action2</ListGroup.Item>
                <ListGroup.Item>action3</ListGroup.Item>
                <ListGroup.Item>action4</ListGroup.Item>
                <ListGroup.Item>action5</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <ButtonGroup>
                <Button variant='light'>+ Add Task</Button>
                <Button variant='light'>- Delete Task</Button>
              </ButtonGroup>
              <Card.Footer className='c-footer'>
                <p className='text-muted'><sub>√√</sub> 2304 tasks completed</p>
              </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={5}>
            <Card>
            <Card.Header  className='d-flex text-muted edit-profile'>
            <h5>{userToken.name}</h5>
            <p>Profile Description</p>
            </Card.Header>
            <Card.Body>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, lorem sit amet mollis interdum, 
              odio tellus blandit eros, et aliquet diam lorem at ligula. Maecenas vulputate dolor eget felis cursus consectetur. 
              Quisque est nisi, commodo at tempus at, facilisis vitae velit. Aliquam efficitur vel tortor quis tristique. 
              Aenean ut lorem neque. Curabitur dignissim turpis lectus, ultrices convallis risus suscipit quis. 
              Proin vitae pretium libero. Duis erat quam, tempus et consectetur eget, iaculis quis velit. Sed eget felis erat. Quisque eu leo lectus. 
              Phasellus arcu elit, blandit id rhoncus et, lacinia sed lacus. Ut dapibus nisi viverra pretium accumsan. 
              Fusce dignissim molestie massa vitae elementum. Donec quis suscipit velit.

              Fusce non nisi scelerisque, eleifend odio et, malesuada turpis. Curabitur euismod volutpat dolor, sed fringilla dolor. 
              Suspendisse sit amet quam ac lacus faucibus fermentum. Sed efficitur bibendum erat ut tincidunt. 
              Mauris suscipit, felis vitae mollis pulvinar, risus erat venenatis arcu, eu vulputate turpis leo vel arcu. 
              Aenean id augue quis odio scelerisque hendrerit. 
              Sed dapibus neque ac quam pharetra ultrices. Integer in pulvinar orci. Nulla egestas est ipsum, 
              a aliquet erat posuere et. Nulla sollicitudin dui purus, eu fringilla odio bibendum nec. 
              Integer in risus ut urna rutrum ornare. Cras mi arcu, tristique sit amet efficitur eget, imperdiet a nisl. Pellentesque ut faucibus tellus.

              Praesent eu ornare turpis. Aliquam erat eros, aliquam et maximus non, fermentum eget massa. Sed posuere condimentum aliquam. 
              Integer sodales feugiat augue vitae rutrum. Vivamus in lobortis magna, at sodales tortor.
               Donec vitae sodales diam. Praesent nec luctus magna, vitae accumsan neque.

              Proin imperdiet mi consectetur lorem lacinia ullamcorper. Nulla ultrices neque nunc, a rutrum ante vulputate vehicula. 
              Curabitur placerat massa scelerisque, volutpat ipsum nec, viverra justo. Sed vitae nulla vitae nulla sagittis tristique. 
              Nullam eu sagittis nisl. Vivamus faucibus erat id fringilla commodo. Ut sodales, sapien sit amet mattis dignissim, erat 
              justo condimentum risus, ut pharetra felis augue sit amet nisi. 
              Praesent id congue turpis, in feugiat nisi.

              Donec ultrices imperdiet nunc non rutrum. Morbi non ante tristique, laoreet felis quis, accumsan eros. 
              Integer in libero sit amet diam tincidunt accumsan non at diam. Donec ullamcorper dui eget orci fringilla condimentum. 
              Nunc malesuada ut tortor a venenatis. Fusce tempus nunc at risus venenatis malesuada. Nunc justo mi, dignissim eget libero id,
               mattis imperdiet libero. Fusce dictum bibendum fringilla. 
              Sed et volutpat nisi. Suspendisse iaculis a odio porttitor malesuada. Phasellus ac arcu eget urna rutrum luctus.
              </p>
            </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
            <ListGroup className='d-flex justify-content-between'>
                <ListGroup.Item><Text>Email: </Text> {userToken.email}</ListGroup.Item>
                <ListGroup.Item><Text>Company: </Text>{userToken.company}</ListGroup.Item>
                <ListGroup.Item><Text>Location: </Text> {userToken.location}</ListGroup.Item>
                <ListGroup.Item><Text>Position: </Text> {userToken.position}</ListGroup.Item>
                <ListGroup.Item><Text>Phone: </Text> {userToken.phone}</ListGroup.Item>
                <ListGroup.Item><Text>Joined on: </Text> {userToken.createdAt}</ListGroup.Item>         
            </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
