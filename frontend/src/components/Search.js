import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'

export default function SearchBar() {
  return (
      <Form>
        <InputGroup>
        <Form.Control 
        type='text' 
        name='q' 
        id='q'
        placeholder='search'/>
        <InputGroup.Text>
        <Search />
        </InputGroup.Text>
      </InputGroup>
      </Form>
  )
}
