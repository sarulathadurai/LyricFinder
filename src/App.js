import React from 'react';
import Navbar from "./components/layouts/Navbar";
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/layouts/Index";
function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
