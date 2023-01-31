import { useContext, useReducer, useState } from 'react'
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



function reducer(state, action){
    switch(action.type){
        case 'FETCH POSTS':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, loading: false, posts: action.payload}
        case 'MAKE_POST':
            return {...state, loading: true}
        case 'POST_SUCCESS':
            return {...state, postSuccess: true, loading: false}
        case 'POST_FAIL':
            return {...state, postSuccess: false, loading: false, error: action.payload }
        case 'DELETE_POST':
            return {...state, loading: true}
        case 'REFRESH_PAGE':
            return {...state, loading: true}
        default:
            return state
    }

}

export default function Dashboard() {

const {state, dispatch: ctxDispatch} = useContext(Store)
const {postedBy} = state;

const [{loading, posts, error, postSuccess}, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    posts:[],
})

const [text, setText] = useState('')

/* const {state, dispatch: ctxDispatch} = useContext(Store)
const {userInfo} = state
 */


const newPost =  async(e) => {
    e.preventDefault()
    if(!text){
        toast.error('please add text to your post')
    }
    dispatch({type: 'MAKE_POST'})
    try{
        
        const {post} = await axios.post('/api/feed/posts/new',{
            Headers: {Authorisation: `Bearer${postedBy.token}` }
        },
        {
            text,
            postedBy,
        })
        dispatch({type: 'MAKE_SUCCESS', payload: posts})

        
    }catch(err) {
        toast.error(getError(error))
        {dispatch({type: 'POST_FAIL'})}
    }

}


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
                    <Form.Control as='textarea' placeholder='make post' onChange={(e)=> setText(e.target.value)}
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
                value={text}
                onChange={(e)=> setText(e.target.value)}/>
                <Button onClick={newPost} variant='success' className='d-flex mt-3'>send post</Button>  
                    
                </FloatingLabel>
                <Post />

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
