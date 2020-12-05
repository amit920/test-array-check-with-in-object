import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Route, Switch, Link } from 'react-router-dom';
import Login from './component/Login';

  

function App(){
  return (
      <BrowserRouter>
      <div>
          <Route path="/" exact component= {Login} />
          
      </div>
      </BrowserRouter>
    )
  }
export default App;


