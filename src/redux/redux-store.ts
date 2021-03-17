import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReduser from './auth-rediser';
import dialogsReduser from './dialogs-rediser';
import profileReduser from './profile-rediser';
import usersReduser from './users-rediser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReduser from './app-rediser';

const redusers = combineReducers({
  profilePage: profileReduser,
  messagePage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
  app: appReduser,
  form: formReducer,
});

type RedusersType = typeof redusers;
export type AppStateType = ReturnType<RedusersType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
