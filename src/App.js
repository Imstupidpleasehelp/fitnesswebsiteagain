import React, { Component } from "react";
import "./App.scss";
import Home from "./components/home";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Services from "./components/services";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.state = {
      propdata: null,
      cartAmount: 0,
      cart: [],
      total: 0,
    };
  }
  Removefromcart() {

    
  }
  addToCart(e) {
    this.setState({
      cart: [...this.state.cart, [e.target.value, e.target.name, e.target.id]],
    });
    e.target.classList.add("btn-success");
    e.target.classList.remove("button");
    e.target.innerHTML = "Added to cart";
  }
  

  componentDidMount() {
    fetch("/addnewitems.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          ...this,
          propdata: res,
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="fixedview">
            <Header />
            <Navbar cart={this.state.cart} />
          </div>
          <div className="viewthatchanges">
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} propdata={this.state.propdata} />
              )}
            />

            <Route
              path="/Services"
              render={(props) => (
                <Services
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  addToCart={this.addToCart}
          
                />
              )}
            />
            <Route
              path="/Blog"
              render={(props) => (
                <Blog {...props} propdata={this.state.propdata} />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/Cart"
              render={(props) => (
                <Cart
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  total={this.state.total}
                  Removefromcart={this.Removefromcart}
                />
              )}
            />
            <Route
              path="/Checkout"
              render={(props) => (
                <Checkout
                  {...props}
                  propdata={this.state.propdata}
                  cart={this.state.cart}
                  cartAmount={this.state.cartAmount}
                  total={this.state.total}
                  
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
