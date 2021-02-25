import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

function App() {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() =>  <Profile />} />
        <Route path='/dialogs' render={() =>  <DialogsContainer />} />
        <Route path='/users' render={() =>  <UsersContainer/>} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
