import React from 'react'
import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'
import Product from '../../components/Product'

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
        <Table borderless hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Code</th>
                <th>Stock</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>01</td>
                  <td>image</td>
                  <td>product name</td>
                  <td>sku code</td>
                  <td>300</td>
                  <td>5.00</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>image</td>
                  <td>product name</td>
                  <td>sku code</td>
                  <td>700</td>
                  <td>8.00</td>
                </tr>
            </tbody>
        </Table>   
    </Container>
      
    </>
  )
}
