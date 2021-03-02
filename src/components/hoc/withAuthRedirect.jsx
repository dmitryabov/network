import { render } from '@testing-library/react';
import React from 'react';
import { Redirect } from 'react-router-dom';



const  withAuthRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
      }
      return AuthRedirectComponent
}


export default withAuthRedirect;
