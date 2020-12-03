import {
  SET_PRODUCTOS
  } from '../types';
  
  import axios from 'axios';
  
  // Get all screams
  export const getProductos = () => (dispatch) => {
    axios
      .get('/productos')
      .then((res) => {
        dispatch({
          type: SET_PRODUCTOS,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_PRODUCTOS,
          payload: []
        });
      });
  };