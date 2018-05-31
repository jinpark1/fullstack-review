import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './Header';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
