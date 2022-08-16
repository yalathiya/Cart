
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
//import index from 'index.css';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {
                price: 9999,
                title: 'Mobile Phone',
                qty : 1,
                img: 'https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80',
                id:1
            },
            {
                price: 99999,
                title: 'Laptop',
                qty : 1,
                img: 'https://images.unsplash.com/photo-1550483513-b4fd222ce32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                id:2
            },
            {
                price: 999,
                title: 'Earphone',
                qty : 1,
                id:3,
                img:'https://images.unsplash.com/photo-1614288064424-11d2d386c474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80'
            }
        ] 
    }
}
handleIncreaseQty = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=  1;
    this.setState({products})
}
handleDecreaseQty = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty == 1){}
    else{
        products[index].qty -=  1;
    }
    this.setState({products})
}
handleDelete = (id) =>{
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
}
getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((item) => {
        count = count + item.qty;
    })
    return count;
}
getCartTotal = () => {
    let total = 0;
    const {products} = this.state; 
    products.forEach((item) => {
        total = total + item.qty * item.price;
    })
    return total;
}

  render(){
    const {products} = this.state;
    return (
      <div>
      <Navbar count = {this.getCartCount()}/>
      <Cart
        products={products}
        onIncreaseQty={this.handleIncreaseQty}
        onDecreaseQty={this.handleDecreaseQty}
        onDelete={this.handleDelete}
      />
      <div style={{fontSize : 20, padding : 20}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
