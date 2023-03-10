import React, { useContext } from 'react'
//import '../css/editprofile.css'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import {Store}  from '../../Store'
import Image  from 'react-bootstrap/Image'
import {ArrowBarUp} from 'react-bootstrap-icons'
import Header from '../../components/Header'
import { ArrowLeft } from 'react-bootstrap-icons'

export default function EditProfileScreen() {


  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {userToken} = state


  const ClickSubmit=()=>{
    let userData = new FormData() 
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
    
    <Container fluid className='formContainer' sm={6} lg={8}>
     
     <Form className='py-4'>    
        <Form.Text className='text-muted p-4'>
        <h1 className='p-6'>
          <span >
          <Button href='/profile' variant='light'>
            <ArrowLeft />
          </Button>
          </span>
          Edit Profile
          </h1> 
          </Form.Text>    
        <Image className='rounded form-img' 
        src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg
        ?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' />   <br />
        <Button className='primary mt-4'>
          Upload new photo
          <span>
            <ArrowBarUp />
          </span>
        </Button> 

        <Form.Group className='mb-4 pt-4' controlId='name'>
          <Form.Label>Name: </Form.Label>
          <Form.Control placeholder='Name'/>
          <Form.Text className='text-muted'>{userToken.name}</Form.Text>
          </Form.Group>

          <Form.Group className='mb-4'>
          <Form.Label>Email: </Form.Label>
          <Form.Control plaintext readOnly defaultValue={userToken.email} />
          <Form.Text className='text-muted'>Ask administrator update your email </Form.Text>
          </Form.Group>

          <Form.Group className='mb-4'>
          <Form.Label>About: </Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='update user bio'/>
        </Form.Group>
        <Form.Group className='mb-4' controlId='password'>
          <Form.Label>password: </Form.Label>
          <Form.Control placeholder='password'/>
          <Form.Text className='text-muted'>Change my password</Form.Text>
          </Form.Group>
        <Button variant='primary' type='submit'>Update</Button>
      </Form>
    </Container>
    </>
  )
}
