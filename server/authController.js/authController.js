const axios = require('axios');

module.exports = {
  login: (req, res) => {
    const payload = {
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/callback`
    };

   
    function tradeCodeForAccessToken() {
      return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
    }

    
    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenResponse.data.access_token}`);
    }

    function storeUserInfoInDatabase(response) {
      const userData = response.data;
      const db = req.app.get('db');
      db.find_user_by_auth0_id(userData.sub).then(users => {
        if (users.length) {
          const userFromDb = users[0];
          req.session.user = userFromDb;
          res.redirect('/');
        } else {
            return db.create_user({
                auth0_id: userData.sub,
                email: userData.email,
                photo: userData.picture,
                name: userData.name,
            }).then(newUser => {
                req.session.user = newUser;
                res.redirect('/');
            });
        }
      });
    }

    tradeCodeForAccessToken()
      .then(tradeAccessTokenForUserInfo)
      .then(storeUserInfoInDatabase)
      .catch(error => {
          console.log('----------server error', error);
          res.status(500).send('Check the server for error message');
      });
  },

  logout: (req, res) => {

  },
};
