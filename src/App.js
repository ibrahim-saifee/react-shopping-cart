import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

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
        <input type="button" value="Show Products" className="btn btn-success" onClick={this.showButtonClicked.bind(this, true)} />
        <input type="button" value="Show Cart" className="btn btn-warning" onClick={this.showButtonClicked.bind(this, false)} />
      </div>
    );
  }
}

export default App;
