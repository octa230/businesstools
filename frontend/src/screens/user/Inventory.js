import React from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'
import Product from '../../components/Product'
import InventoryProduct from '../../components/InventoryProduct'

export default function Inventory() {
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
    <Container className='mt-3'>
        <Table bordered striped hover>
            <thead>
                <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Code</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Updated</th>
                </tr>
            </thead>
            <tbody>
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
             <InventoryProduct />
            </tbody>
        </Table>   
    </Container>
      
    </>
  )
}
