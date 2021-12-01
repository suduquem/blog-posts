import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  //Ya no se requiere que este componente busque su propia data
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    /* id es retornado por la API de Users
    userId es el id que usa la API de Posts */

    //const user = this.props.users.find((user) => user.id === this.props.userId);
    /* Este cálculo se mueve para mapStateToProps con el fin de hacer
    el componente más reusable */

    const { user } = this.props;

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

const mapStateToProps = (state, ownProps) => {
  //mapStateToProps se usa para hacer computaciones sobre el state

  //ownProps: referencia de las props que le entran al componente
  return { user: state.users.find((user) => user.id === ownProps.userId) };
  //id es retornado por la API de Users
  //userId es el id que usa la API de Posts
};

//First argument: null - si no se tiene mapStateToProps
//export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);
