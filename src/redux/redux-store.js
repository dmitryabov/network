import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogs-rediser';
import profileReduser from './profile-rediser';
import usersReduser from './users-rediser';

const redusers = combineReducers({
  profilePage: profileReduser,
  messagePage: dialogsReduser,
  usersPage: usersReduser,
});

const store = createStore(redusers);

export default store;
