import { useContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate, useLocation} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container'
import {toast} from 'react-toastify'
import { Store } from '../../Store'
import {Helmet} from 'react-helmet-async'
import { getError } from '../../utils'
import Header from '../../components/Header'


export default function SignupUser() {


    const navigate = useNavigate()
    const {search} = useLocation()
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/profile' 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [role, setRole] = useState(false)
    const [position, setPosition ] = useState('')
    const [location, setLocation] = useState('')
    const [phone, setPhone] = useState('')
    const [photo, setPhoto] = useState('')
    const [ConfirmPassword, setcomfirmPassword] = useState('')
    const [password, setPassword] = useState('')

 
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const {userToken} = state;


    const submitHandler = async(e)=> {
        e.preventDefault()
        
        if(password !== ConfirmPassword){
            toast.error('passwords don\'t match');
            return;
        }
        try{
        const {data} = await Axios.post('/api/users/register', {
           name,phone,
           email,photo,
           password,
           company, 
           role, 
           position, 
           location,
        });

        ctxDispatch({type: 'SIGN_IN', payload: data})
        localStorage.setItem('userToken', JSON.stringify(data))
       navigate(redirect || '/profile')  
    } catch (err) {
        toast.error(getError(err))
    }
    }

    useEffect(()=> {
        if(!userToken){
            navigate(redirect)
        } 
    }, [navigate, redirect, userToken])

  return (
    <>

<Header 
    title={'Tools Dashboard'}
    link1={'Invetory'}
    link2={'Community'}
    link3={'Profile'}
    link4={'Create Product'}
    link5={'Add Employee'}
    dropdown={'Account'}
    dropdownLink1={'Sign Out'}
    dropdownLink2={'Add Expense'}
    dropdownLink3={'Edit Profile'}
    />
    <Container className='signupForm mt-3'>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <Form onSubmit={submitHandler}>
            <Form.Text>
                <h1>Add New User</h1>
            </Form.Text>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name: </Form.Label>
                <Form.Control onChange={(e)=> setName(e.target.value)} placeholder='Full Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email' >
                <Form.Label>Email: </Form.Label>
                <Form.Control onChange={(e)=> setEmail(e.target.value)} placeholder='email Address'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='company'>
                <Form.Label>Company: </Form.Label>
                <Form.Control onChange={(e)=> setCompany(e.target.value)} placeholder='Company'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='position'>
                <Form.Label>Position: </Form.Label>
                <Form.Control onChange={(e)=> setPosition(e.target.value)} placeholder='Position'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='location'>
                <Form.Label>Area</Form.Label>
                <Form.Control onChange={(
                    e) => setLocation(e.target.value)} placeholder='location of operation' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control onChange={(e)=> setPhone(e.target.value) } placeholder='phone number' />
            </Form.Group>

           <Form.Group className='mb-3' controlId='password'>
            <Form.Label>create password</Form.Label>
            <Form.Control onChange={(e)=> setPassword(e.target.value)} placeholder='create password'/>
           </Form.Group>

            <Form.Group className='mb-3' controlId='ConfirmPassword'>
                <Form.Label>Comfirm Password</Form.Label>
                <Form.Control onChange={(e)=> setcomfirmPassword(e.target.value)} placeholder='confirm password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='photo'>
                <Form.Label>Photo: </Form.Label>
                <Form.Control onChange={(e)=> setPhoto(e.target.files[0])} type='file' />
            </Form.Group>
            <Form.Check
            className="mb-3"
            type="checkbox"
            id="role"
            
            label="Administrator"
            onChange={(e) => setRole(e.target.checked)}
          />
            <Button variant='primary' type='submit'>Add employee</Button>
        </Form>
      
    </Container>
    </>
  )
}
