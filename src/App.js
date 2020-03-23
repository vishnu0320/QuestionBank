import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";

import Math from "./component/math";
import Home from "./component/home";
import AddQuestion from "./component/addQuestion";
import GenratePaper from "./component/genratePaper";
import Select from "./component/select";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addQuestion">
          <AddQuestion />
        </Route>
        <Route path="/genratePaper">
          <GenratePaper />
        </Route>
        <Route path="/select/:id">
          <Select />
        </Route>
        <Route path="/write/:id">
          <Math />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
