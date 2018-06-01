const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

const initialState = {
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case UPDATE_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    default:
      return state;
  }
};

export function loginUser(user) {
  return {
    type: LOGIN,
    payload: user,
  };
};

export function logoutUser() {
  return {
    type: LOGOUT,
  };
};

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
}