import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config";
import "./mycss.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = firebase.auth().currentUser;
    user != null && history.push("/home");
    // console.log("home", user);
  }, []);

  function onSubmit(event) {
    console.log(email, "--", password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        history.push("/home");
        // console.log("ok");
        //   console.log("login", authUser);
      })
      .catch(error => {
        console.log("error");
      });
    event.preventDefault();
  }

  function onChange(event) {
    event.target.type === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
    // console.log("change", email, " - ", password);
  }

  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>
            Welcome to <br />
            Question Bank
          </h1>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="btns">
            <button type="submit" class="btn btn-outline-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
