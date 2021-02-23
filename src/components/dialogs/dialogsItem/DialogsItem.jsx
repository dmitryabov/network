import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./DialogsItem.module.css';

const  DialogsItem = ({name, id}) => {
  let path = '/dialogs/' + id;
  return (
        <div className={classes.dialog + ' ' + classes.active}>
             <NavLink to={path}>{name}</NavLink> 
          </div>
  );
}


export default DialogsItem;
