import React, { useContext, useEffect, useReducer } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import axios from 'axios'
import { Store } from '../Store'


function reducer(action, state){
    switch(action.type){
        case 'FETCH_POST':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, loading: false, post: action.payload}
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload}
        case 'DELETE_POST':
            return {...state, loading: true}
        case 'DELETE_SUCCESS':
            return {...state, loading: false}
    }
}

export default function MyPost(props) {

   
   return (
    <ListGroupItem>
     
      
    </ListGroupItem>
  )
}
