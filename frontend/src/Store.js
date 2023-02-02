import { createContext, useReducer } from "react";

export const Store =  createContext()

const initialState = {

    menubox: false,
    userToken: localStorage.getItem('userToken')
    ? JSON.parse(localStorage.getItem('userToken'))
    : null


}

function reducer(state, action){
    switch (action.type) {
        case 'SET_MENU_ON': 
            return {...state, menubox: true}
        case 'SET_MENU_OFF':
            return {...state, menubox: false}
        case 'SIGN_IN':
            return {...state, userToken: action.payload}
        case 'SIGN_OUT':
            return {
                ...state,
                userToken: null,
            }
        default:
            return state;
    }
}

export function StoreProvider(props){
    const[state, dispatch]= useReducer(reducer, initialState)
    const value = {state, dispatch};
    return<Store.Provider value={value}>{props.children}</Store.Provider>
}