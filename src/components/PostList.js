import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.posts); //Forma de ver lo que devuelve la API
    return <div className='ui relax divided list'>{this.renderList()}</div>;
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
