import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Navbar.module.css';


const  Navbar = () => {
  return (
      <nav className={classes.nav}>
          <div className={`${classes.item}`}>
            <NavLink to='/profile' className={`${classes.itemLink}`} activeClassName={classes.active}>
              Profile
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs' className={`${classes.itemLink}`} activeClassName={classes.active}>
              Messages
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/users' className={`${classes.itemLink}`} activeClassName={classes.active}>
            Users
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/music' className={`${classes.itemLink}`} activeClassName={classes.active}>
            Music
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/settings' className={`${classes.itemLink}`} activeClassName={classes.active}>
            Settings
            </NavLink>
          </div>

      </nav>
  
  );
}

export default Navbar;
