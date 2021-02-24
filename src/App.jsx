import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App({state, dispatch}) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() =>  <Profile state={state.profilePage} dispatch={dispatch}/>} />
        <Route path='/dialogs' render={() =>  <Dialogs state={state.messagePage} dispatch={dispatch}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
