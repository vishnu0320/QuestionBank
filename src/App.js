import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";

import Math from "./component/addQuestion/math";
import Home from "./component/home";
import AddQuestion from "./component/addQuestion/addQuestion";
import GenratePaper from "./component/generatePaper/generatePaper";
import Select from "./component/generatePaper/select";
import SelectTypeG from "./component/generatePaper/selectChapter";
import SelectTypeA from "./component/addQuestion/selectChapter";
import Paper from "./component/generatePaper/paper";
import Login from "./component/login";
function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/addQuestion" exact>
          <AddQuestion />
        </Route>
        <Route path="/generatePaper" exact>
          <GenratePaper />
        </Route>
        <Route path="/generatePaper/SelectType/class/:id">
          <SelectTypeG />
        </Route>
        <Route path="/addQuestion/SelectType/class/:id">
          <SelectTypeA />
        </Route>
        <Route path="/select/:id">
          <Select />
        </Route>
        <Route path="/class/:id/write">
          <Math />
        </Route>
        <Route path="/Paper/:id">
          <Paper />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
