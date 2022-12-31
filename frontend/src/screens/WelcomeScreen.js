import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

export default function WelcomeScreen() {

    const Screens = [
    {name: 'Home', url: '/', icon: 'https://iconarchive.com/download/i109781/inipagi/job-seeker/id-card.ico', text:'Go to welcome screen'}, 
    {name: 'Inventory', url: '/', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkOpWrlF445PxbidxpGCLYl5g02CctGAuRw&usqp=CAU', text: 'Go to Inventory Section'}, 
    {name: 'Admin', url: '/', icon: 'https://iconarchive.com/download/i109781/inipagi/job-seeker/id-card.ico', text: 'Go to Admin login'}, 
    {name: 'Employees', url: '/', icon: 'https://iconarchive.com/download/i109781/inipagi/job-seeker/id-card.ico', text: 'See Employee Stat'},
    {name: 'Informaton Bot', url: '/', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkOpWrlF445PxbidxpGCLYl5g02CctGAuRw&usqp=CAU', text: 'See Timeline '},
    {name: 'Chat enviroment', url: '/', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkOpWrlF445PxbidxpGCLYl5g02CctGAuRw&usqp=CAU', text: 'Go to chat enviroment'},
    {name: 'Expense Tracker', url: '/', icon: 'https://iconarchive.com/download/i109781/inipagi/job-seeker/id-card.ico',  text: 'See Expense Stat'},
    {name: 'Invoice Managemet', url: '/', icon: 'https://iconarchive.com/download/i109781/inipagi/job-seeker/id-card.ico', text: 'Add & manage invonces '},
]
  return (
    Screens.map((screen) => (

             <Card key={screen.name}  style={{width: '500px'}} className='welcomeCards'>
            <Card.Img className='cardImg' variant ="top" src={screen.icon}/>
            <Card.Body>
                <Card.Title>{screen.name}</Card.Title>
                <Card.Text>{screen.text}</Card.Text>
                <Button variant='dark' size='sm'>
                    <Link className ='CardBtn' to={screen.url}>
                    Go
                    </Link>
                    </Button>
            </Card.Body>
        </Card>   
    )
    )
  )
}
