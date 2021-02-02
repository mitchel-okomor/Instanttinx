import {
  SET_CART,
  SET_LOADING,
  SET_USER,
  SET_USER_EVENTS,
  SET_TICKET_EVENTS,
  SET_USER_ORDERS,
  SET_MESSAGE,
} from "../helpers/constant";

export const initialState = {
  user: null,
  userEvents: [],
  ticketEvents: [],
  cart: [],
  orders: [],
  message: "",
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_USER_EVENTS:
      return {
        ...state,
        userEvents: action.payload,
      };

    case SET_TICKET_EVENTS:
      return {
        ...state,
        ticketEvents: action.payload,
      };

    case SET_USER_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
  }

  return state;
};
