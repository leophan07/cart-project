var initialState = [
  {
    id: 1,
    name: 'Iphone XS Max',
    description: 'Made in Apple',
    price: 1500,
    inventory: 20
  },
  {
    id: 2,
    name: 'SamSung Galaxy Note 9',
    description: 'Made in SamSung',
    price: 1400,
    inventory: 15
  },
  {
    id: 3,
    name: 'PocoPoco',
    description: 'Made in Taiwan',
    price: 600,
    inventory: 10
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default product;