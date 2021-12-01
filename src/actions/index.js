import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

// Action Creator - es una función porque Redux-Thunk lo permite
//Son funciones que retornan otra función

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  /* Nos debemos asegurar que el resultado de fetchPost (la acción) sea
  dispatched, por eso se llama dentro de un dispatch */
  /* Antes de hacer dispatch nos debemos asegurar que se tengan todos
  los Posts, por eso se pone await delante de la expresión */
  await dispatch(fetchPosts());
  /* Cuando se llama fetchPosts, la función interna es retornada y
  Redux-Thunk automáticamente la invocará con dispatch como argumento */
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  //_.map con una key segundo argumento, retorna los valores referentes a esa key
  //_.uniq retorna un array con los valores únicos
  userIds.forEach((id) => dispatch(fetchUser(id)));
  /*No es necesario poner await fetchUser, pues no hay más requests
  después de ese statement. Además dentro de un forEach no se puede
  usar async-await*/

  // Equivalente a lo anterior:
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach((id) => dispatch(fetchUser(id)))
  //   .value();
    /* A map() se le pasa como primer argumento el objeto sobre el que
    se hace chain- getState().posts y el resultado de map() se la pasa a
    uniq(), y así sucesivamente.
    Se debe poner al final .value() para que se ejecuten los pasos */
};

// Obtiene todos los Posts a la vez.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');
  //https://jsonplaceholder.typicode.com/posts

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  //La respuesta de la API es un objeto y solo nos interesa data, se vio con console.log
};

/* URL para obtener los usuarios:
  https://jsonplaceholder.typicode.com/users
  https://jsonplaceholder.typicode.com/users/1 //Usuario con id:1
*/

//Se obtiene de a un usuario a la vez:
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*
// USANDO MEMOIZE - para evitar muchos network requests
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
//fetchUser es singular porque solo se retorna 1 usuario a la vez

// _fetchUser: _ simboliza función privada - no usar a menos que se sepa qué se está haciendo
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/
