import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    //id es retornado por la API de Users
    //userId es el id que usa la API de Posts
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null;
      /* Si no se encuentra el usuario, el componente no se renderiza.
      También, cuando el componente se renderiza por primera vez y no
      hay lista de Posts disponible, se utiliza este return */
    }
    // Si se encuentra el usuario:
    return <div className='header'>{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

//First argument: null - si no se tiene mapStateToProps
export default connect(mapStateToProps, { fetchUser })(UserHeader);
