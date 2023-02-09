import React, {useReducer, useContext, useEffect, useState, useRef} from 'react'
import Card from 'react-bootstrap/esm/Card';
import {formatDistance, subDays} from 'date-fns'
import { Store } from '../Store'
import axios from 'axios'
import {toast} from 'react-toastify'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import {Button, Badge, Container} from 'react-bootstrap/esm/'
import { Trash,} from 'react-bootstrap-icons'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';






 const reducer = (state, action) => {
  switch (action.type) {
    
    case 'COMMENT_REQUEST':
      return {...state, loadingCreateComment: true}
    case 'COMMENT_SUCCESS':
      return {...state, loadingCreateComment: false}
    case 'COMMENT_FAIL':


      return {...state, loadingCreateComment: false}
    case 'FECTH_REQUEST':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      return {...state, posts: action.payload}
    case 'FECTH_FAIL':
      return {...state, loading: false, error: action.payload}

    case 'FETCH_POST_SUCCESS':
      return {...state, loading: false, post: action.payload}

    case 'DELETE_REQUEST':
      return {...state, post: action.payload, loadingDelete: true}
    case 'DELETE_SUCCESS':
      return {...state, loadingDelete: false}
    case 'DELETE_FAIL':
      return {...state, loadingDelete: false, error: action.payload }
    case 'REFRESH_POST':
        return {...state, post: action.payload}
    default:
      return state;
  }
}; 

export default function Post(props) {

const {post}=props
const postId = post._id;
let cxt = post.comments.length;

let commentsRef = useRef


const[comment, setComment] = useState('')
 

const [{ error, posts, loadingCreateComment, loading, loadingDelete }, dispatch] = 
  useReducer(reducer, {
    loading: true,
    posts:[],
    post:[],
    error: '',
  }); 


  const { state } = useContext(Store);
  const { userToken } = state;

  useEffect(()=> {
    async function getPost(){
      try{
      dispatch({type: 'FETCH_REQUEST'})
      const result = await axios.get(`/api/feed/post/${postId}`)
  
      if(result){
        dispatch({type: 'FETCH_POST_SUCCESS', payload: result.data})
  
      }else{
        dispatch({type: 'FETCH_FAIL', payload: error.message})
      } 
      
    }catch(error){
        toast.error(error)
      }
    }
    getPost()
  }, [postId, error])




async function removePost(post){
  if(window.confirm('Delete this post?')){
    try{
      const post = await axios.delete(`/api/feed/delete/post/${postId}`,
      {headers: {authorization: `Bearer${userToken.token}`}
    })
    toast.success('post deleted successfully')
    dispatch({type: 'DELETE_SUCCESS'})
    
    }catch(err){
      toast.error(err)
      dispatch({
        type: 'DELETE_FAIL'
      })
    }
  }
}

  async function addComment(e){

    e.preventDefault()
    if(!comment){
      window.alert('please type comment')
      return;
    }
    try{
      const {data} = await axios.post(`/api/feed/post/${postId}/comment`,
      {comment, postedBy: userToken._id, name: userToken.name},
      {
        headers:{authorization: `Bearer${userToken.token}`}
      }
      )
      dispatch({type: 'COMMENT_SUCCESS'})
      toast.success('comment added')
      post.comments.unshift(data.comment)
      dispatch({type: 'REFRESH_POST', payload: post})
      window.scrollTo({
        behavior: 'smooth',
        top: commentsRef.current.offSetTop
      })
    } catch(error){
      toast.error(error.message)
    }
  }


 
  return (
    <Container className='fluid'>
      
       <Card border='light' className='mb-4 p-0' key={post._id}>  
       <Card.Header className='d-flex post-user text-muted' as={'h5'}>{`@${post.user}`}
         <span>
            { cxt !== 1 || 0 ? (<Badge bg='light' text='dark'>{cxt}: comments</Badge>): (<Badge bg='light' text='dark'>{cxt}: comment</Badge>)}
          </span>
          </Card.Header>
       <Card.Body>
         
          {/* <Card.Subtitle className='mt-3'>{post.user ? post.user : 'Identity hidden'}</Card.Subtitle> */}
         {/* <Card.Subtitle className='mt-3'>post header</Card.Subtitle> */}
         <Card.Text className='mt-2 mb-0'>
           {post.text}
           </Card.Text>
         <Card.Subtitle className='mt-3'>Comments:</Card.Subtitle>
       </Card.Body>
       
       <ListGroup  className='list-group flash'> 
          {post.comments.map((cx)=>(
               <ListGroup.Item key={cx._id}>
               <ul className='d-flex commentHead'>
                 <li>{cx.name}</li>
                 <li>{cx.createdAt}</li>
               </ul>
               <p>
                 {cx.comment}
               </p>
           
             </ListGroup.Item> 
          ) 
         )}
          
         </ListGroup>
         <ListGroup.Item>
           <InputGroup className='mb-3'>
             <Form.Control
             as='textarea'
             placeholder='Add comment' 
             aria-describedby='submitBtn'
             value={comment}
             onChange={(e)=>setComment(e.target.value)}
             />
             <Button onClick={addComment} variant='outline-secondary'>comment</Button>
           </InputGroup>
         </ListGroup.Item>
       
       <Card.Body>
       
 
       </Card.Body>
       <Card.Footer className='text-muted c-footer'>
        <p className='post-footer-text'>
          {post.createdAt}
          <span>  
           <Trash className='deletePost' onClick={removePost}/>
         </span>
          </p>
       </Card.Footer>
     </Card>
    
    </Container>
  )
}
