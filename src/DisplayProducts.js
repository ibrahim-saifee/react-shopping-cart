import React, { Component } from "react"
import Products from "./Products"
import "./DisplayProducts.css"

class DisplayProducts extends Component {
  constructor () {
    super()

    var tempProducts = [
      new Products(1, "Laptop", "The best laptop", 90000, 10, "./laptop.jpeg"),
      new Products(2, "Bag", "The best bag", 2000, 10, "./bag.jpg"),
      new Products(3, "T-shirt", "The best T-shirt", 1500, 10, "./tshirt.jpeg"),
      new Products(4, "Mouse", "The best mouse", 1000, 10, "./mouse.jpeg"),
      new Products(5, "Watch", "The best watch", 5000, 10, "./watch.jpeg"),
    ]

    this.state = {
      products: tempProducts
    }
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
            <input type="button" className="btn btn-warning" value="Buy" />
          </div>
        </div>
      )
    })
    return (
      <div className="card-group">{productCards}</div>
    )
  }
}

export default DisplayProducts