import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config";

import "./mycss.css";

function Home() {
  const history = useHistory();

  useEffect(() => {
    const user = firebase.auth().currentUser;
    user === null && history.push("/");
    console.log("home", user);
  }, []);

  const signout = () => {
    console.log("signout");
    firebase
      .auth()
      .signOut()
      .then(() => history.push("/"));
  };

  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>
            Welcome to <br />
            Question Bank
          </h1>
          <hr></hr>
        </div>
        <div className="btns">
          <Link to="/addQuestion">
            <button type="button" class="btn btn-outline-success">
              Add Question
            </button>
          </Link>
          <Link to="/generatePaper">
            <button type="button" class="btn btn-outline-success">
              Genrate Question Paper
            </button>
          </Link>
        </div>
        <button className="my-btn btn-outline-danger" onClick={signout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;
