import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as message from '../constants/Message';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { deleteProductInCart, changeMessage } from '../actions/index';

class CartContainer extends Component {

  showCartItem = (cart) => {
    var { onDeleteProductInCart, onChangeMessage } = this.props;
    var result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem 
            key={index}
            item={item}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
          />
        )
      })
    }
    return result;
  }

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return (
        <CartResult cart={cart}/>
      )
    }
    return result;
  }

  render() {
    var {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    )
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      return dispatch(deleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      return dispatch(changeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);