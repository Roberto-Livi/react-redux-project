import React from 'react';
import { Route, Switch } from "react-router-dom";
import UserPage from './components/UserPage'
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Home from './components/Home'
import Login from './components/Login'
// import './styling/App.css'


function App() {

  const header = window.location.pathname !== "/" ? <Header /> : null;

  return (
    <div>
      {header}
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={UserPage} exact path="/userpage" />
        <Route component={SearchBar} exact path="/searchbar" />
      </Switch>
    </div>
  );
}

export default App;
