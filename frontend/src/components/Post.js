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
import {moment} from 'moment'





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
    case 'DELETE_RESET':
      return {...state, loadingDelete: false, successDelete: false};
    case 'MAKE_POST':
      return {...state, loadingPost: true, postSuccess: false};
    case 'POST_SUCCESS':
      return {...state, loadingPost: false, postSuccess: true}
    case 'POST_FAIL':
      return {...state, loadingPost: false, postSuccess: false, error: action.payload}
    case 'REFRESH_POST':
      return {...state, loadingPost: true }
    default:
      return state;
  }
};

export default function Post() {


  function formatDate(date){
     return date = new Date().toLocaleTimeString()
  }

  const [{ loading, error, posts, loadingDelete, successDelete }, dispatch] = useReducer(reducer, {
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
      if(successDelete){
        dispatch({type: 'DELETE_RESET'})
      } else {
        fetchPosts()
      }
    }, [userInfo, successDelete])



    const removePost = async (post) => {
      if(window.confirm('You want toDelete post this post?')){
        try{
          dispatch({type: 'DELETE_REQUEST'});
          await axios.delete(`/api/feed/posts/delete/${post._id}`,
          
          )
          toast.success(getError('post deleted successfully'))
          dispatch({type: 'DELETE_SUCCESS'})
        
        } catch(err){
          toast.error(getError(err))
          dispatch({type: 'DELETE_FAIL'})
        } 
      }
    }
    const addComment = async()=> {
      const post = await axios.get('/api/')
      if(post){
        const comment = await axios.post(`/api/posts/${post._id}/comment`)
      }
    }
  return (
    <>
    {posts.map((post)=> (
      <Card border='light' className='mt-4 mb-4' key={post._id}>  
      <Card.Body>
        <Card.Header className='post-user' as='h5'>{`@${post.postedBy}`}</Card.Header>
          <Card.Subtitle className='mt-3'>{post.postedBy ? post.postedBy.name : 'Identity hidden'}</Card.Subtitle>
        {/* <Card.Subtitle className='mt-3'>post header</Card.Subtitle> */}
        <Card.Text className='mt-2'>
          {post.text}
          </Card.Text>
        <Card.Subtitle className='mt-3'>Comments</Card.Subtitle>
      </Card.Body>
      <ListGroup  className='list-group-flash'>
        {post.comments}
        <ListGroup.Item>

          <InputGroup className='mb-3'>
            <Form.Control
            as='textarea'
            placeholder='Add comment' 
            aria-describedby='submitBtn'
            />
            <Button variant='outline-secondary'>comment</Button>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={removePost} className='deletePost' variant='secondary'>
          <Trash />
        </Button>

      </Card.Body>
      <Card.Footer>{formatDate(post.createdAt)}</Card.Footer>
    </Card>
    )).reverse()}
    </>
  )
}
