import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReduser from './auth-rediser';
import dialogsReduser from './dialogs-rediser';
import profileReduser from './profile-rediser';
import usersReduser from './users-rediser';
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
  profilePage: profileReduser,
  messagePage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
