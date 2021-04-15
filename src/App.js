import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0)
      return;

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDelete = (id) => {
    const { products } = this.state;
    const updatedProducts = products.filter((product) => product.id !== id)

    this.setState({
      products: updatedProducts
    })
  }
  getCartCount = () => {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <h1>Cart</h1>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
