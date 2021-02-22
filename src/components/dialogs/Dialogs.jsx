import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Dialogs.module.css';


const  Dialogs = () => {
  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
             <NavLink to='/dialogs/1'>Dasha</NavLink> 
          </div>
          <div className={classes.dialog}>
             <NavLink to='/dialogs/2'>Andrey</NavLink> 
          </div>
          <div className={classes.dialog}>
             <NavLink to='/dialogs/3'>Dima</NavLink> 
          </div>
        </div>
        <div className={classes.messages}>
          <div className={classes.message}>hi</div>
          <div className={classes.message}>hi</div>
          <div className={classes.message}>hi</div>
        </div>
      </div>
  
  );
}

export default Dialogs;
