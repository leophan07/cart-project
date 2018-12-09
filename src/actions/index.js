import * as types from '../constants/ActionTypes';

export const onAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}