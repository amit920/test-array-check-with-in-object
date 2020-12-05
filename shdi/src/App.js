import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Route, Switch, Link } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';
import ProfileDetail from './component/ProfileDetail';
import Search from './component/Search';
import AddPhoto from './component/AddPhoto';
import ProfileEdit from './component/ProfileEdit';


function App(){
  return (
      <BrowserRouter>
      <div>
          <Route path="/" exact component= {Login} />
          <Route path="/Register"  component= {Register} />
          <Route path="/Dashboard"  component= {Dashboard} />
          <Route path="/Profile"  component= {Profile} />
          <Route path="/ProfileDetail"  component= {ProfileDetail} />
          <Route path="/Search"  component= {Search} />
          <Route path="/AddPhoto"  component= {AddPhoto} />
          <Route path="/ProfileEdit"  component= {ProfileEdit} />
      </div>
      </BrowserRouter>
    )
  }
export default App;


