import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import classes from'./Header.module.css';


const  Header = (props) => {
  return (
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt='logo' />
        <div className={classes.loginBlock}>
          {props.isAuth 
            ? <div className={classes.login}> user name: {props.login } <button onClick={props.logoutThunkCreator}>Log Out</button></div> 
            : <NavLink className={classes.login} to={`/login`}>Login</NavLink>
         }
        </div>
      </header>
  
  );
}

export default Header;
