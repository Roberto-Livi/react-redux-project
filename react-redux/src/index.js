import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import manageImages from './reducers/manageImages'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(manageImages, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
