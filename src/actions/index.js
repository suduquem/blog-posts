import jsonplaceholder from '../apis/jsonplaceholder';

//Action Creator - es una función porque Redux-Thunk lo permite
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  //La respuesta de la API es un objeto y solo nos interesa data, se vio con console.log
};
