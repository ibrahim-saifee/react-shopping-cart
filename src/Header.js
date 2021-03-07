import React, { Component } from "react"
import logo from "./logo.svg"
import "./Header.css"

class Header extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={logo} className="logo" alt="Shopping cart" />
          </div>
          <div className="col-8">
            col8
          </div>
        </div>
      </div>
    )
  }
}

export default Header
