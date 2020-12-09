import {SET_CART, SET_LOADING, SET_USER, SET_USER_EVENTS} from '../helpers/constant';

export const initialState = {
    user:"",
    userEvents:[],
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
        case SET_USER_EVENTS: 
        return{
            ...state,
            userEvents: action.payload
        }
       default:
    }

    return state;
}