import React from 'react';
import Navbar from "./components/layouts/Navbar";
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/layouts/Index";
import { Provider } from "./context";
import Lyrics from "./components/layouts/Tracks/Lyrics";
import DisplayLyrics from "./components/layouts/Tracks/DisplayLyrics"

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/:track/:id/:commontrack_id" component={Lyrics} />
              <Route exact path="/lyrics/:trackTitle" component={DisplayLyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
