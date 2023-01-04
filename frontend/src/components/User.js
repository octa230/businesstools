import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

export default function User() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Button>Follow</Button>
        </Col>
      </Row>
    </Container>
  )
}
