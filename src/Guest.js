import React, { Component } from 'react';
import { MyContext } from "./App";
class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <MyContext.Consumer>
          {value => <h4>{value}</h4>}
        </MyContext.Consumer>
      </div>
    )
  }
}
export default Guest;