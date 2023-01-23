import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Telephone, EnvelopeAt, PersonAdd, PersonDash } from 'react-bootstrap-icons'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Button from 'react-bootstrap/esm/Button'
import Text from 'react-bootstrap/esm/FormText'
import Image from 'react-bootstrap/esm/Image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getError } from '../utils'




const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, users: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export default function User() {

  const [{ loading, error, users }, dispatch] = useReducer((reducer), {
    users: [],
    loading: true,
    error: '',
  });

    useEffect(()=> {
      const fetchUsers = async () => {
        dispatch({type: 'FETCH_REQUEST'})
        try{
          const result = await axios.get('/api/users/listusers')
          dispatch({type: 'FETCH_SUCCESS', payload: result.data})
        } catch (err){
          toast.error(getError(err))
        }
      }
      fetchUsers()
    },[])


    function follow(){

    }
    function unfollow(){

    }


    return (
    <Container fluid className='mt-4'>
      {users.map((user) => (
      <Row className='mt-4' key={user._id}>
        <Col xs ={12} md={3}>
        <Image className='rounded form-img' 
        src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='/>
        <span>{user.name}</span>
        </Col>
       {/*  <Col xs={12} md={5}>
          <p>About user / user description</p>
        </Col> */}

        <Col xs={12} md={8}>
          
            <ListGroup>
            <ListGroup.Item><Text>Email: </Text> {user.email}</ListGroup.Item>
            <ListGroup.Item><Text>Company: </Text>{user.company}</ListGroup.Item>
            <ListGroup.Item><Text>Location: </Text>{user.location}</ListGroup.Item>
            <ListGroup.Item><Text>Position: </Text>{user.position}</ListGroup.Item>
            <ListGroup.Item><Text>Phone: </Text>{user.phone}</ListGroup.Item>
            <ListGroup.Item><Text>Added On: </Text>{user.createdAt}</ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={12} md={8} className='p-4'>
                <ButtonGroup className='me-4' aria-label='Actions'>
                    <Button variant='secondary'><Telephone/>{' '}</Button>
                    <Button variant='secondary'><EnvelopeAt/></Button>
                    <Button variant='secondary' onClick={follow}><PersonAdd/></Button>
                    <Button variant='secondary' onClick={unfollow}><PersonDash/></Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
   
        </Col>
      
      </Row>
))}
    </Container>
    )}