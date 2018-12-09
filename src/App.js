import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />
            {/* Message */}
            <Message />
            {/* Cart */}
            <CartContainer />  
          </div>
        </main>
        {/* Footer */}
        <Footer />  
      </div>
    );
  }
}

export default App;
