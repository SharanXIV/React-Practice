import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React Basics Review</h1>
        <p>Welcome!</p>
        <Ninjas name="Ryu" age="25" belt="Black"/>
        <Ninjas name="Ken" age="24" belt="Blue"/>

      </div>
    );
  }
}

export default App;
