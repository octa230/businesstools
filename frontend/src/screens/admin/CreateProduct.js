import axios from 'axios'
import React,{ useContext, useReducer, useState } from 'react'
import  {useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/esm/Form'
import { toast } from 'react-toastify'
import Header from '../../components/Header'
import { getError } from '../../utils'
import { Store } from '../../Store'


function reducer(state, action){
    switch(action.type){
        case 'CREATE_REQUEST':
            return {...state, loadingCreate: true}
        case 'CREATE_SUCCESS':
            return {...state, loadingCreate: false}
        case 'CREATE_FAIL':
            return {...state, loadingCreate: false}
        default:
            return state
    }
}




export default function CreateProduct() {

    const navigate = useNavigate()

    const[{loadingCreate, error, product}, dispatch] = useReducer(
        reducer, {
            loadingCreate: true, 
            error: ''
        })

    const {state, dispatch: ctxDispatch} = useContext(Store)
    const {userInfo} = state
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [code, setCode] = useState('');
    const [stock, setStock] = useState('');
    const [supplier, setSupplier] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('')


    async function newProduct(){
        if(window.confirm('Are you trying to create a new product?')){
            try{
                dispatch({type: 'CREATE_REQUEST'})
                const {data} = await axios.post('/api/products/create', {
                    name, price, category, 
                    code, stock,
                    supplier,
                    image, color
                }, 
                {headers: {Authorization: `Bearer${userInfo.token}`}}
                )
                toast.success('product created successfully')
                dispatch({type: 'CREATE_SUCCESS'})
                navigate('/inventory')
            } catch (err){
                toast.error(getError(error));
                dispatch({type: 'CREATE_FAIL'})
            }
        }
    }

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
    <Container className='createProduct'>
        <Form onSubmit={newProduct}>
        <Form.Text>
                <h1>Add New Product</h1>
            </Form.Text>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name: </Form.Label>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder='product name'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='price'>
                <Form.Label>Price: </Form.Label>
                <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='product price'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='category'>
                <Form.Label>Category: </Form.Label>
                <Form.Control value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='product category'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='color'>
                <Form.Label>Color: </Form.Label>
                <Form.Control value={color} onChange={(e)=>setColor(e.target.value)} placeholder='product category'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='supplier'>
                <Form.Label>supplier: </Form.Label>
                <Form.Control value={supplier} onChange={(e)=>setSupplier(e.target.value)} placeholder='product supplier'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='code'>
                <Form.Label>Code: </Form.Label>
                <Form.Control value={code} onChange={(e)=>setCode(e.target.value)} placeholder='product code'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='stock'>
                <Form.Label>Stock: </Form.Label>
                <Form.Control value={stock} onChange={(e)=>setStock(e.target.value)} placeholder='in stock count'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='image'>
                <Form.Label>Image: </Form.Label>
                <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} placeholder='product Image'  type='file'/>
            </Form.Group>
            <Button type='submit'>Done</Button>

        </Form>

    </Container>
      
    </>
  )
}
