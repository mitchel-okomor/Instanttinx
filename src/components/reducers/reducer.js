import {SET_CART, SET_LOADING, SET_USER} from '../helpers/constant';

export const initialState = {
    user:"",
    cart: [],
    loading: false
}


export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading:action.payload
            }
            
        case SET_USER: 
        return{
            ...state,
            user: action.payload
        }

        case SET_CART: 
        return{
            ...state,
            cart: action.payload
        }
       
       
    }

    return state;
}