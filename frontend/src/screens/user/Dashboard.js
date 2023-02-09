import { useContext, useEffect, useReducer, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header  from '../../components/Header'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { getError } from '../../utils'
import { toast } from 'react-toastify'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'
import Post from '../../components/Post'
import User from '../../components/User'
import Button from 'react-bootstrap/esm/Button'
import { Store } from '../../Store'
import { useParams } from 'react-router-dom'



function reducer(state, action){
    switch(action.type){
        case 'FETCH POSTS':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, loading: false, posts: action.payload}
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload}
        case 'MAKE_POST':
            return {...state, loading: true}
        case 'POST_SUCCESS':
            return {...state, postSuccess: true, loading: false, payload: action.payload}
        case 'POST_FAIL':
            return {...state, postSuccess: false, loading: false, error: action.payload }
        case 'DELETE_POST':
            return {...state, loading: true}
        case 'REFRESH_PAGE':
            return {...state, posts: action.payload}
        default:
            return state
    }
}


export default function Dashboard() {


const {state, dispatch: ctxDispatch} = useContext(Store)
const {userToken} = state;

const [{loading, posts, error, postSuccess}, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    posts:[],
})



useEffect(()=> {
    async function fetchPosts(){
      dispatch({type: 'FETCH_REQUEST'})
        try{
          const result = await axios.get(`/api/feed/posts/`)
          dispatch({type: 'FETCH_SUCCESS',  payload: result.data})
        } catch (error){
         dispatch({type:'FETCH_FAIL', payload: error.message})
        }
      }
      fetchPosts() 
    }, [])



  
const [text, setText] = useState('')
const [generalText, setGeneralText] = useState('')

/* const {state, dispatch: ctxDispatch} = useContext(Store)
const {userInfo} = state
 */

async function newGeneralPost(){

}


const newPost =  async(e) => {
    e.preventDefault()
    if(!text){
        toast.error('please add text to your post')
    }
    try{
        const {data} = await axios.post('/api/feed/posts/new',
        {text, postedBy: userToken.id, user: userToken.name},
        {headers: {authorization: `Bearer${userToken.Token}`}},
        
        dispatch({type: 'POST_SUCCESS'})
    
        )
        
    }catch(error) {
        console.log(error.message)
        dispatch({type: 'POST_FAIL', payload: error.message})
    }

}


  return (
    <>
    <Header 
    title={'Tools Dashboard'}
    link1={'Invetory'}
    link2={'Community'}
    link3={'Profile'}
    link5={'Add employee'}
    link4={'Create product'}
    dropdown={'Account'}
    dropdownLink1={'Sign Out'}
    dropdownLink2={'Add Expense'}
    dropdownLink3={'Edit Profile'}
    />
    <Container fluid className='dashboard'>
        <Row className='justify-content-center'>
            <Col className='posts-column' xs={12} md={3}>
                <Form.Text>
                    <h1>My Posts</h1>
                </Form.Text>
            </Col>
            <Col xs={12} xl={5} className='mt-3 p-4 dashboard-center'>

<Form.Text>
    <h1>Make Post</h1>
</Form.Text>
                <FloatingLabel>
                    <Form.Control as='textarea' placeholder='make post' 
                    onChange={(e)=> setText(e.target.value)}
                    style={{height:'100px'}} />
                    <Button onClick={newPost} className='d-flex mt-3'>Make post</Button>                    
                </FloatingLabel><br />
                
<Form.Text>
    <h5>Write Broadcast or General message</h5>
</Form.Text>
                <FloatingLabel
                
                lable='Make broadcast'
                className='mb-3'
                >
                <Form.Control as='textarea' 
                placeholder='Make general post'
                value={generalText}
                onChange={(e)=> setGeneralText(e.target.value)}/>
                <Button onClick={newGeneralPost} variant='success' className='d-flex mt-3'>send post</Button>  
                    
                </FloatingLabel>
              {posts.map((post)=>(
                <Post post={post} key={post._id}/>
              )).reverse()}
            </Col>
            <Col xs={12} xl={4}>
                <Form.Text>
                <h1>Following</h1>
                </Form.Text>
                <User />
            </Col>
        </Row>
        
    </Container>
    </>

  )
}
