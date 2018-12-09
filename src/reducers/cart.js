import * as types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
  {
    product: {
      id: 1,
      name: 'Iphone XS Max',
      image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-256gb-moi-didongviet.jpg',
      description: 'Made in Apple',
      price: 1500,
      inventory: 20,
      rating: 5
    },
    quantity: 2
  },
  {
    product: {
      id: 3,
      name: 'PocoPhone F1',
      image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/24/636733769809259305_pocophone-f1-xanh-1.jpg',
      description: 'Made in Taiwan',
      price: 600,
      inventory: 10,
      rating: 3
    },
    quantity: 3
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
}

export default cart;