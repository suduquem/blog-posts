import jsonplaceholder from '../apis/jsonplaceholder';

// Action Creator - es una función porque Redux-Thunk lo permite
// Obtiene todos los Posts a la vez.
//Es una función que retorna otra función:
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');
  //https://jsonplaceholder.typicode.com/posts

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  //La respuesta de la API es un objeto y solo nos interesa data, se vio con console.log
};

//Se obtiene de a un usuario a la vez:
export const fetchUser = (id) => async (dispatch) => {
  //https://jsonplaceholder.typicode.com/users
  //https://jsonplaceholder.typicode.com/users/1 //Usuario con id:1
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
  //User es singular porque solo se retorna 1 usuario a la vez
};
