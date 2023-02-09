import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Search() {
  return (
      <Form.Group>
        <Form.Control 
        type='text' 
        name='q' 
        id='q'
        placeholder='search'
        />
      </Form.Group>
  )
}
