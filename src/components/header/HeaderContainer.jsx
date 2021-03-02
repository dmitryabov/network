import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setAuthThunkCreator } from '../../redux/auth-rediser';
import Header from './Header';


class  HeaderContainer  extends React.Component{
  componentDidMount() {
      this.props.setAuthThunkCreator()
  }

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

export default connect(mapStateToProps, {setAuthThunkCreator})(HeaderContainer);
