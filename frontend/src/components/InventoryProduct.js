import {useEffect, useReducer, useParams, useContext}from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store'
import axios from 'axios'
import { getError } from '../utils'
import Image from 'react-bootstrap/esm/Image'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/esm/Button'
import { ArrowClockwise, ArrowUpRight, PencilFill, Trash2Fill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'




function reducer(state, action){
  switch(action.type){
    case 'FETCH_PRODUCT':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false}
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}


export default function InventoryProduct() {

  const navigate = useNavigate()

  const {state} = useContext(Store)
  const {userInfo}= state

const[{products, loading, error}, dispatch]=useReducer(reducer,
  {
    loading: true,
    products: [],
    error:'',
  })

useEffect(()=> {
  async function fetchProducts(){

    dispatch({type: 'FETCH_PRODUCT'})
    try{
      const result = await axios.get('/api/products/products')
      dispatch({type: 'FETCH_SUCCESS', payload: result.data})
    } catch (error){
      toast.error(getError(error))
    }
  }
  fetchProducts()
}, [products])


  return (
   <>
   {products.map((product)=>(
     <tr key={product._id}>
    {/*  <td>
         <Image className='img-thumbnail' src={product.image}/>
 
     </td> */}
     <td>{product.name}</td>
     <td>{product.code}</td>
     <td>{product.stock}</td>
     <td>{product.price}</td>
     <td>{product.category}</td>
     <td>{product.supplier}</td>
     <td>{product.color}</td>
     <td>
      <Button variant='dark' className='sm m-2'>-</Button>
      <Button variant='dark' className='sm m-2'>+</Button>
      <Button variant='link' className='sm m-2'><Link to={'/edit-product'}><PencilFill/></Link></Button>
     </td>
     <td>
      <Button variant='outline-danger' className='sm m-2'><Trash2Fill /></Button>
      <Button variant='outline-success' className='sm m-2'><ArrowClockwise /></Button>
      <Button variant='warning' className='sm m-2'><ArrowUpRight /></Button>
     </td>
   </tr>
   ))}
   </>
  )
}
