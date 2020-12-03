import {
  SET_PRODUCTOS
  } from '../types';
  
  const initialState = {
    productos: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {

      case SET_PRODUCTOS:
        return {
          ...state,
          productos: action.payload
        };
      default:
        return state;
    }
  }