import React, { Component } from "react"
import Products from "./Products"
import "./DisplayProducts.css"
import AddToCart from "./AddToCart"

class DisplayProducts extends Component {
  constructor () {
    super()

    var tempProducts = [
      new Products(1, "Laptop", "The best laptop", 90000, 10, "./laptop.jpeg"),
      new Products(2, "Bag", "The best bag", 2000, 8, "./bag.jpg"),
      new Products(3, "T-shirt", "The best T-shirt", 1500, 4, "./tshirt.jpeg"),
      new Products(4, "Mouse", "The best mouse", 1000, 5, "./mouse.jpeg"),
      new Products(5, "Watch", "The best watch", 5000, 2, "./watch.jpeg"),
    ]

    this.state = {
      products: tempProducts,
      buyProduct: false,
      cartProduct: {}
    }
  }

  buyButtonClicked(product) {
    this.setState({ buyProduct: true, cartProduct: product })
  }

  render () {
    var productCards = this.state.products.map((product) => {
      return (
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top product-image" src={product.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <h6 className="card-title">Price Rs. {product.price}</h6>
            <div className="card-text">{product.description}</div>
            <div className="card-text">In stock: {product.quantity}</div>
            <input type="button" className="btn btn-warning" value="Buy" onClick={this.buyButtonClicked.bind(this, product)} />
          </div>
        </div>
      )
    })

    return (
      <React.Fragment>
        <div className="card-group">{productCards}</div>
        { this.state.buyProduct && <AddToCart product={this.state.cartProduct}></AddToCart> }
      </React.Fragment>
    )
  }
}

export default DisplayProducts