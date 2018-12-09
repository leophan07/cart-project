import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var index = -1;
  var { product } = action;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, action.product);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({
          product,
          quantity: 1
        });
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
}

const findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for(var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}

export default cart;