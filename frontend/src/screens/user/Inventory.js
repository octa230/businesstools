import Header from '../../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'
import InventoryProduct from '../../components/InventoryProduct'





export default function Inventory() {



  return (
    <>
    <Header 
    title={'Tools Dashboard'}
    link1={'Invetory'}
    link2={'Community'}
    link3={'Profile'}
    link4={'Create Product'}
    link5={'Add Employee'}
    dropdown={'Account'}
    dropdownLink1={'Sign Out'}
    dropdownLink2={'Add Expense'}
    dropdownLink3={'Edit Profile'}
    />
    <Container fluid className='mt-3'>
        <Table bordered striped hover>
            <thead>
                <tr>
                {/* <th>Photo</th> */}
                <th>Name</th>
                <th>Code</th>
                <th>Stock</th>
                <th>Price</th>
                <th>category</th>
                <th>supplier</th>
                <th>color</th>
                <th>Update</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <InventoryProduct />
            </tbody>
        </Table>   
    </Container>
      
    </>
  )
}
