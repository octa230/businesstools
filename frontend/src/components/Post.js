import React, {useReducer, useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/esm/Card'
import { Store } from '../Store'
import { getError } from '../utils'
import axios from 'axios'
import {toast} from 'react-toastify'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import { Trash } from 'react-bootstrap-icons'
import { useParams } from 'react-router-dom'





const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_REQUEST':
      return {...state, loading: true, successDelete: false};
    case 'DELETE_SUCCESS':
      return {...state, loadingDelete: false, successDelete: true};
    case 'DELETE_FAIL':
      return {...state, loadingDelete: false, successDelete: false};
    case 'MAKE_POST':
      return {...state, loadingPost: true, postSuccess: false};
    case 'POST_SUCCESS':
      return {...state, loadingPost: false, postSuccess: true}
    case 'POST_FAIL':
      return {...state, loadingPost: false, postSuccess: false}
    case 'REFRESH_POST':
      return {...state, loadingPost: true }
    default:
      return state;
  }
};

export default function Post() {

  
  const[comments, addComment] = useState()

  function formatDate(date){
     return date = new Date().toLocaleTimeString()
  }


  const [{ error, posts,  successDelete, loading }, dispatch] = 
  useReducer(reducer, {
    posts:[],
    loading: true,
    error: '',
  });


  const { state } = useContext(Store);
  const { userInfo } = state;
 
    useEffect(()=> {
      const fetchPosts = async () => {
        dispatch({type: 'FETCH_REQUEST'})
        try{
          const { data } = await axios.get('/api/feed/posts', {
            headers: {Authorzation: `Bearer${userInfo.token}` }
          })
          dispatch({type: 'FETCH_SUCCESS', payload: data})
        } catch (err){
          toast.error(getError(error))
        }
      }
        fetchPosts()
    }, [userInfo, posts, error, successDelete])

  function removePost(){

  }

  return (
    <>
    {posts.map((x)=> (
      <Card border='light' className='mt-4 mb-4' key={x._id}>  
      <Card.Body>
        <Card.Header className='post-user' as='h5'>{`@${x.postedBy}`}</Card.Header>
          <Card.Subtitle className='mt-3'>{x.postedBy ? x.postedBy.name : 'Identity hidden'}</Card.Subtitle>
        {/* <Card.Subtitle className='mt-3'>post header</Card.Subtitle> */}
        <Card.Text className='mt-2'>
          {x.text}
          </Card.Text>
        <Card.Subtitle className='mt-3'>Comments</Card.Subtitle>
      </Card.Body>
      <ListGroup  className='list-group-flash'>
        {x.comments}
        <ListGroup.Item>

          <InputGroup className='mb-3'>
            <Form.Control
            as='textarea'
            placeholder='Add comment' 
            aria-describedby='submitBtn'
            />
            <Button onClick={addComment} variant='outline-secondary'>comment</Button>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={removePost} className='deletePost' variant='secondary'>
          <Trash />
        </Button>

      </Card.Body>
      <Card.Footer>{x.createdAt}</Card.Footer>
    </Card>
    )).reverse()}
    </>
  )
}
