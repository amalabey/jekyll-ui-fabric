import React, { Component } from 'react';
import {render} from 'react-dom';
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <NavBar />
    )
  }
}

render(<App />, document.getElementById('root'));
