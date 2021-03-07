import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Header from "./Header"
import DisplayProducts from './DisplayProducts';
import DisplayCart from './DisplayCart'

class App extends Component {
  constructor () {
    super()

    this.state = {
      showCart: false
    }
  }

  showButtonClicked = (isShowCart) => {
    this.setState({showCart: isShowCart})
  }

  render () {
    return (
      <div>
        <Header></Header>
        <input type="button" value="Show Products" className="btn btn-success" onClick={this.showButtonClicked.bind(this, false)} />
        <input type="button" value="Show Cart" className="btn btn-warning" onClick={this.showButtonClicked.bind(this, true)} />
        { this.state.showCart ? <DisplayCart></DisplayCart> : <DisplayProducts></DisplayProducts> }      
      </div>
    );
  }
}

export default App;
