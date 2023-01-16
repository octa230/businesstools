import { useState } from 'react'
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

export default function Dashboard() {


    const [posts, setPosts] = useState('')

    const makePost = async(e)=> {
       
        const post = await axios.post('/api/feed/posts/new', )
        try{
            if(!post.text){
                toast.error(getError('Add text'))
            } 

        } catch (err) {
        toast.error(getError(err))
    }}
    

    function addPost(post){
        const updatedPosts = [...posts];
        updatedPosts.unshift(post)
        setPosts(updatedPosts)
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
                    <Form.Control as='textarea' placeholder='make post' 
                    style={{height:'100px'}} />
                    <Button onClick={addPost} className='d-flex mt-3'>Make post</Button>                    
                </FloatingLabel><br />
                
<Form.Text>
    <h5>Write Broadcast or General message</h5>
</Form.Text>
                <FloatingLabel
                controlId='makepost'
                lable='Make broadcast'
                className='mb-3'
                >
                <Form.Control controlId='text' as='textarea' placeholder='Make general post'/>
                <Button onClick={makePost} variant='success' className='d-flex mt-3'>send post</Button>  
                    
                </FloatingLabel>
                <Post />
                <Post />
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
