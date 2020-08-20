import React from 'react';
import { Route, Switch } from "react-router-dom";
import UserPage from './components/UserPage'
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Home from './components/Home'
// import './styling/App.css'


function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={UserPage} exact path="/userpage" />
        <Route component={SearchBar} exact path="/searchbar" />
      </Switch>
    </div>
  );
}

export default App;
