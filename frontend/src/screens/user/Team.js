import React, { useEffect } from 'react'
import Header from '../../components/Header'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'

export default function Team() {


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
      <Container fluid className='mt-4'> 
        
        </Container> 
    </>
  )
}
