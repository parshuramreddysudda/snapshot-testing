import React, { Component } from 'react';
import Items from './Components/Items';

class App extends Component {
  render() {
    const items = [
      'Thor',
      'Captain America',
      'Hulk'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;