import React from 'react'
import moment from 'moment'
import Image from 'react-bootstrap/esm/Image'

export default function InventoryProduct() {
  return (
    <tr>
    <td>
        <Image className='img-thumbnail' src='https://encrypted-tbn0.gstatic.com/
        images?q=tbn:ANd9GcSbDY7Gx0lEY3lgkH6J4mlw7APgGJMus9ZWxA&usqp=CAU'/>

    </td>
    <td>Hydrangea blue</td>
    <td>sku code</td>
    <td>700</td>
    <td>8.00</td>
    <td>{moment().format('D/MM/YYYY')}</td>
  </tr>
  )
}
