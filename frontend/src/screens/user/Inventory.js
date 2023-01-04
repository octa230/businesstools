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
    <Container>
        <Table borderless hover>
            <thead>
                <tr>ID</tr>
                <tr>Photo</tr>
                <tr>Name</tr>
                <tr>Code</tr>
                <tr>Stock</tr>
                <tr>Price</tr>
            </thead>
            <tbody>
                <td>01</td>
                <td></td>
            </tbody>

        </Table>   
    </Container>
      
    </>
  )
}
