import { createContext, useReducer } from "react";

export const Store =  createContext()

const initialState = {

    menubox: false,
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


}

function reducer(state, action){
    switch (action.type) {
        case 'SET_MENU_ON': 
            return {...state, menubox: true}
        case 'SET_MENU_OFF':
            return {...state, menubox: false}
        case 'SIGN_IN':
            return {...state, userInfo: action.payload}
        case 'SIGN_OUT':
            return {
                ...state,
                userInfo: null,

            }
        
        case 'MAKE_POST':
            return {...state, posts: action.payload}
        default:
            return state;
    }
}

export function StoreProvider(props){
    const[state, dispatch]= useReducer(reducer, initialState)
    const value = {state, dispatch};
    return<Store.Provider value={value}>{props.children}</Store.Provider>
}