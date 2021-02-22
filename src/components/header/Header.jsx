import React from 'react';
import logo from '../../img/shazam.svg';
import classes from'./Header.module.css';


const  Header = () => {
  return (
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt='logo' />
      </header>
  
  );
}

export default Header;
