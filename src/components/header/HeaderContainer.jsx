import React from 'react';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../redux/auth-rediser';
import Header from './Header';


class  HeaderContainer  extends React.Component{

  render() {
    return (
      <Header {...this.props}/>
  
  );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})


export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);
