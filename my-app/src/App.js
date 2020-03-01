import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Sharan',age: 30,belt: 'purple',id: 1},
      {name: 'Akuma',age: 34,belt: 'black',id: 2},
      {name: 'Ryu',age: 28,belt: 'red',id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React Basics Review</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
