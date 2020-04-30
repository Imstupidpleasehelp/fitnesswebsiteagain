import React, { Component } from "react";
import PaypalButton from "./Checkout";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      propdata: null,
      priceamount: 0,
    };
  }
  componentDidMount() {
    if (this.props.cart.length !== 0) {
      var pricevar = document.getElementsByClassName("cartprice");
      var i;
      let pricearray = [];
      for (i = 0; i < pricevar.length; i++) {
        pricearray[i] = pricevar[i].textContent;
      }
      var string = JSON.stringify(pricearray);
      string.replace(/"/g); //"[apple,orange,pear]"
      //console.log(pricearray);


      for (const element of pricearray) {
        
        let numberarray = parseInt(element)
        console.log(numberarray);

      }
/*
      pricearray.forEach((element) => {
        let total = parseInt(pricearray);
        console.log(total); 
      });*/
    }
  }

  render() {
    if (this.props.cart.length !== 0) {
      var cartitems = this.props.cart.map(function (cartitems) {
        return (
          <div className="col-sm-12  cartitem" key={cartitems[1]}>
            <img
              src={cartitems[2]}
              id={cartitems[2]}
              alt={cartitems[1]}
              className="cart-image"
            ></img>

            <h5 className="">{cartitems[1]}</h5>
            <div className="pricebox">
              <p className="cartprice">{cartitems[0]}</p>
            </div>
          </div>
        );
      });
    } else
      return (
        <h1 className="nocart">
          Add items to your cart and they will appear here.
        </h1>
      );

    return (
      <div className="cart-container">
        {cartitems}
        <div className="cartfooter">
          <h4 className="yourtotal">Your total: $ {this.props.total}</h4>
          <PaypalButton className="checkoutbutton" total={this.props.total} />
        </div>
      </div>
    );
  }
}

export default Cart;
