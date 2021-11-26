import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state) => {
  /* En src/reducers/index.js se definió la key posts que recibe el
  state del reducer postsReducers, por eso se utiliza state.posts*/
  return { posts: state.posts }; //Ya se tiene disponible en las props
};

/*Primer argumento de connect es siempre mapStateToProps - state,
se puede poner null si no se tiene esa función*/
//Segundo argumento, los action creators que se usarán en el componente
//fetchPosts: fetchPosts <- se acorta
export default connect(mapStateToProps, { fetchPosts })(PostList);
