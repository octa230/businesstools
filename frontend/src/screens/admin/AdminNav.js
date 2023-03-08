import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function AdminNav() {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Employees</Accordion.Header>
        <Accordion.Body>
            menu item 1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Sales</Accordion.Header>
        <Accordion.Body>
            menu item 1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Salaries</Accordion.Header>
        <Accordion.Body>
            Salary Status
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Calender</Accordion.Header>
        <Accordion.Body>
            Calender
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Tasks</Accordion.Header>
        <Accordion.Body>
            employee Tasks
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Notes</Accordion.Header>
        <Accordion.Body>
            notes
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>Reports</Accordion.Header>
        <Accordion.Body>
            menu item 1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='7'>
        <Accordion.Header>Suppliers</Accordion.Header>
        <Accordion.Body>
            Suppliers
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='8'>
        <Accordion.Header>Pending Payment</Accordion.Header>
        <Accordion.Body>
            Pending list
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
