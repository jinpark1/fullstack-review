import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from './ducks/reducer';
import { Link } from 'react-router-dom';

class Profile extends Component {
  componentDidMount() {
    const { loginUser } = this.props;
    axios.get('/api/user').then(response => {
      if (response.data.name) {
        // Put the user into redux store.
        loginUser(response.data);
      } else {
        this.props.history.push('/');
      }
    });
  }

  logout() {
    const { logoutUser, history } = this.props;
    axios.post('/api/logout').then(response => {
      logoutUser();
      history.push('/');
    });
  }
  
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        {user && <div>
          <img src={user.photo} className="photo" />
          <h2>{user.name}</h2>
          <h2>Email: {user.email}</h2>
          <div>
            <Link to="/profile/edit">Edit profile</Link>
          </div>
          <button onClick={() => this.logout()}>Log out</button>
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  loginUser,
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
