import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

//Primer argumento de connect es siempre mapStateToProps - state
//Segundo argumento, los action creators que se usarán en el componente
//fetchPosts: fetchPosts - se acorta
export default connect(null, { fetchPosts })(PostList);
