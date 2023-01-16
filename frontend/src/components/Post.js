import React, {useReducer, useContext, useEffect } from 'react'
import Card from 'react-bootstrap/esm/Card'
import { Store } from '../Store'
import { useState } from 'react'
import { getError } from '../utils'
import axios from 'axios'
import {toast} from 'react-toastify'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import { Trash } from 'react-bootstrap-icons'

export default function Post() {


  const [post, setPosts] = useState('');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, posts: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [{ loading, error, posts }, dispatch] = useReducer((reducer), {
    posts: [],
    loading: true,
    error: '',
  });

    useEffect(()=> {
      const fetchPosts = async () => {
        dispatch({type: 'FETCH_REQUEST'})
        try{
          const result = await axios.get('/api/posts/feed')
          dispatch({type: 'FETCH_SUCCESS', payload: result.data})
        } catch (err){
          toast.error(getError(error))
        }
      }
      fetchPosts()
    }, [])



  function removePost(post){
    const updatedPosts = [...posts];
    const index = updatedPosts.indexOf(post);
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts)
  }


  return (
    <>
    {posts.map((post)=> (
      <Card border='light' className='mt-4 mb-4'>  
      <Card.Body>
        <Card.Header className='post-user' as='h5'>{`@${post.postedBy}`}</Card.Header>
          <Card.Subtitle className='mt-3'>Company: Floral Story</Card.Subtitle>
        <Card.Subtitle className='mt-3'>post header</Card.Subtitle>
        <Card.Text className='mt-2'>
          {post.text}
          </Card.Text>
        <Card.Subtitle className='mt-3'>Comments</Card.Subtitle>
      </Card.Body>
      <ListGroup  className='list-group-flash'>
        <ListGroup.Item>Comment one</ListGroup.Item>
        <ListGroup.Item>Comment two</ListGroup.Item>
        <ListGroup.Item>Comment three</ListGroup.Item>
        <ListGroup.Item>

          <InputGroup className='mb-3'>
            <Form.Control
            as='textarea'
            placeholder='Add comment' 
            aria-describedby='submitBtn'
            />
            <Button variant='outline-secondary'>post comment</Button>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={removePost} className='deletePost' variant='secondary'>
          <Trash />
        </Button>

      </Card.Body>
      <Card.Footer>posted : 2hours ago</Card.Footer>
    </Card>
    ))}
    </>
  )
}
