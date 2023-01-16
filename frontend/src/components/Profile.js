import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
//import { getError } from '../utils';
import { Store } from '../Store';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/esm/Button';
import Text from 'react-bootstrap/esm/FormText'
import Header from './Header';
import { PencilFill } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
//import Axios from 'axios';
//import { toast } from 'react-toastify';


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

 
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {userInfo} = state

/*   const [{ loading, error, user, loadingCreateReview }, dispatch] =
  useReducer(reducer, {
    loading: true,
    error: '',
  });
 */



  return (
    <>
    <Helmet>
      <title>profile</title>
    </Helmet>
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
            <Image className='rounded form-img' 
            src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='/>
        <span>{userInfo.name} 
        <Button variant='' href='/edit-profile'>
            <PencilFill />
            </Button>
        </span>
        <span>
        </span>
        </Col>
        <Col xs={12} md={5}>
            <p>{`${userInfo.name}'s profile`}</p>
        </Col>
        <Col xs={12} md={4}>
            <ListGroup className='d-flex justify-content-between'>
                <ListGroup.Item><Text>Email: </Text> {userInfo.email}</ListGroup.Item>
                <ListGroup.Item><Text>Company: </Text>{userInfo.company}</ListGroup.Item>
                <ListGroup.Item><Text>Location: </Text> {userInfo.location}</ListGroup.Item>
                <ListGroup.Item><Text>Position: </Text> {userInfo.position}</ListGroup.Item>
                <ListGroup.Item><Text>Phone: </Text> {userInfo.phone}</ListGroup.Item>
                <ListGroup.Item><Text>Joined on: </Text> {userInfo.createdAt}</ListGroup.Item>         
            </ListGroup>
        </Col>
      </Row>
    </Container>
    </>
  )
}
