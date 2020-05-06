import React from "react";

import Collapsible from "react-collapsible";
import "bootstrap/dist/css/bootstrap.css";

import "font-awesome/css/font-awesome.min.css";

class Services extends React.Component {
 

  render() {
    if (this.props.propdata) {
      var serviceitems = this.props.propdata.main.serviceitems.map( (serviceitems) => {
        return (
          <div className="col-sm-12  serviceitem" key={serviceitems.title}>
            <h5 className="">{serviceitems.title}</h5>
            <img
              src={serviceitems.image}
              alt={serviceitems.title}
              className="img-fluid serviceitemimg"
            ></img>

            <p id={serviceitems.description} className=" ">
              {serviceitems.description}
            </p>
            <p className="">{serviceitems.price}</p>
            <p id={serviceitems.amount} className=" ">
              Duration:{serviceitems.amount} week(s)
            </p>
            <button
              name={serviceitems.title}
              id={serviceitems.image}
              value={serviceitems.price}
              className="button"
              onClick={e => this.props.addToCart(e)}
            >
              Add to cart
            </button>
            <Collapsible trigger={<p className="">Read more</p>}>
              {serviceitems.fulldescription}{" "}
            </Collapsible>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;

    return (
      <div>
        <h1 className="servicestitle">Some services I offer</h1>
        <div className="container">{serviceitems}</div>
      </div>
    );
  }
}

export default Services;
