import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';



class App extends Component {
  render() {
    console.log('app',this.props)
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
