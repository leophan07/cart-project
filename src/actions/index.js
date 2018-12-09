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

export const deleteProductInCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product
  }
}

export const updateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  }
}