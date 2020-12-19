import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from "./pages/Content"
import * as serviceWorker from './serviceWorker';


import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/series/" component={Content} />
    <Route exact path="/movies/:id" component={Content} />
    <Route exact path="/mylist/" component={Content} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
