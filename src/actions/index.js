import jsonplaceholder from '../apis/jsonplaceholder';

//Action Creator - es una función porque Redux-Thunk lo permite
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
