import React from 'react';
import { Route, Switch } from "react-router-dom";
import UserPage from './components/UserPage'
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Home from './components/Home'
import Login from './components/Login'
// import './styling/App.css'


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = (term) => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=41qvNIGonP9AzHX_83MwRdtSa1zZHbslarJkHcMmFGw",
      {
        params: {
          query: term,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  render() {
    const header = window.location.pathname !== "/" ? <Header /> : null;
    return (
      <div>
        {header}
        <Switch>
          <Route component={Login} exact path="/" />
          <Route component={Home} exact path="/home" />
          <Route component={UserPage} exact path="/userpage" />
          <Route exact path="/searchbar" render={() => <SearchBar onSearchSubmit={this.onSearchSubmit}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
