import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const mapStateToPropsForRedirect  = (state) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

const  withAuthRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
      }
      
     const ConectedAuthRedirectComponent= connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

      return ConectedAuthRedirectComponent
}


export default withAuthRedirect;
