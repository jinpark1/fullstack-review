import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import routes from './routes';
import Header from './Header';

class App extends Component {

  render() {
    // const redirectUri = encodeURIComponent(window.location.origin + '/callback');
    // const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`

    return (
      <div className="App">
        {/* <a href={auth0LoginUrl}>Login</a> */}
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;


