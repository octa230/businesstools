import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Button from 'react-bootstrap/esm/Button'

export default function Post() {
  return (
    <Card border='light' className='mt-4 mb-4'>
      
      <Card.Body>
        <Card.Header className='post-user' as='h5'>@Administrator</Card.Header>
          <Card.Subtitle className='mt-3'>Company: Floral Story</Card.Subtitle>
        <Card.Subtitle className='mt-3'>post header</Card.Subtitle>
        <Card.Text className='mt-2'>
          It helps the designer plan where the content will sit. 
          It helps in creating drafts of the content on the pages of the website. 
          It originates from the Latin text but is seen as gibberish.
          Sometimes, the reader gets distracted while creating or working on the website. 
          That’s why this language is important.
          This tool makes the work easier for the webmaster.
          </Card.Text>
        <Card.Subtitle className='mt-3'>Comments</Card.Subtitle>
      </Card.Body>
      <ListGroup  className='list-group-flash'>
        <ListGroup.Item>Comment one</ListGroup.Item>
        <ListGroup.Item>Comment two</ListGroup.Item>
        <ListGroup.Item>Comment three</ListGroup.Item>
        <ListGroup.Item>

          <InputGroup className='mb-3'>
            <Form.Control
            as='textarea'
            placeholder='Add comment' 
            aria-describedby='submitBtn'
            />
            <Button variant='outline-secondary'>post comment</Button>

          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>un follow</Button>

      </Card.Body>
      <Card.Footer>posted : 2hours ago</Card.Footer>
    </Card>
  )
}
