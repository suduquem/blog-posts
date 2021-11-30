import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // Dummy reducer mientras se construye la app
  // replaceMe: () => 'hi there',
  posts: postsReducer,
  users: usersReducer,
});
