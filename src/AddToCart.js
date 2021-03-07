import React, {Component} from 'react'

class AddToCart extends Component {
  constructor(product) {
    super(product)

    this.state = {
      quantity: 1
    }
  }

  updateQuantity = (incrementValue) => {
    var newValue = this.state.quantity + incrementValue
    if (newValue > this.props.product.quantity || newValue < 1) return;

    // this.setState({quantity: newValue})
    this.setState((prevState) => {
      return { ...prevState, quantity: newValue }
    })
  }

  render () {
    return (
      <React.Fragment>
        <h1> Add to Cart </h1>
        <div className="card bg-warning" style={{width: "18rem"}}>
          <img className="card-img-top product-image" src={this.props.product.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.productName}</h5>
            <h6 className="card-title">Price Rs. {this.props.product.price}</h6>
            <div className="card-text">{this.props.product.description}</div>
            <div className="card-text">In stock: {this.props.product.quantity}</div>
          </div>
          <div className="card-body">
            <input type="button" className="btn btn-danger" value="-" onClick={this.updateQuantity.bind(this, -1)} />
            { this.state.quantity }
            <input type="button" className="btn btn-success" value="+" onClick={this.updateQuantity.bind(this, 1)}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AddToCart
