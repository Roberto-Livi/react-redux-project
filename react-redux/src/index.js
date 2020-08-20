import React from 'react';
import ReactDOM from 'react-dom';
// import Login from './components/Login';
// import UserPage from './components/UserPage'
// import SearchBar from './components/SearchBar'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
