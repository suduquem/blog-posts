import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  // Dummy reducer mientras se construye la app
  // replaceMe: () => 'hi there',
  posts: postsReducer,
});
