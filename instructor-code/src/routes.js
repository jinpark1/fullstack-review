import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';

export default (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route path="/profile/edit" component={EditProfile} />
  </div>
)