import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

function App({state, addPost}) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() =>  <Profile state={state.profilePage} addPost={addPost}/>} />
        <Route path='/dialogs' render={() =>  <Dialogs state={state.messagePage}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
