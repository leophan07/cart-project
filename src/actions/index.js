import * as types from '../constants/ActionTypes';

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    product
  }
}

export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}