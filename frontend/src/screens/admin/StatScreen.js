import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import MonthExpense from '../../components/MonthExpense'
import { AnnualGraph } from '../../components/AnnualGraph'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function StatScreen() {
  return (
    <>
    <Helmet>
        <title>Insights</title>
    </Helmet>
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
    <Container fluid>
        <Row>
            <Col xs={12} md={2}> col-1</Col>
            <Col xs={12} md={6}> 
            <AnnualGraph />
            </Col>
            <Col xs={12} md={4}>
                <MonthExpense />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}> col-1</Col>
            <Col xs={12} md={6}> col-2 </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}> col-1</Col>
            <Col xs={12} md={4}> Col-2</Col>
        </Row>
      
    </Container>
    </>
  )
}
