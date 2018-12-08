var initialState = [
  {
    id: 1,
    name: 'Iphone XS Max',
    image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-256gb-moi-didongviet.jpg',
    description: 'Made in Apple',
    price: 1500,
    inventory: 20,
    rating: 5
  },
  {
    id: 2,
    name: 'SamSung Galaxy Note 9',
    image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/8/20/636703736254310068_note9-xanh-1.jpg',
    description: 'Made in SamSung',
    price: 1400,
    inventory: 15, 
    rating: 4
  },
  {
    id: 3,
    name: 'PocoPhone F1',
    image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/24/636733769809259305_pocophone-f1-xanh-1.jpg',
    description: 'Made in Taiwan',
    price: 600,
    inventory: 10,
    rating: 3
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default products;