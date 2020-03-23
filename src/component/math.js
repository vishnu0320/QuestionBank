import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { addStyles, EditableMathField } from "react-mathquill";
import firebase from "firebase";
import firebaseConfig from "../config";

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

addStyles();

const Math = props => {
  const [text, setText] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log("selected >>", location.state);
  }, []);

  const save = () => {
    var cls = database.ref(`${location.state}/`);
    cls.push({
      question: text
    });
    alert("save data");
  };

  return (
    <div>
      <h1>Enter New Question </h1>
      tip: press <b>tap</b> for change position of curser
      <br />
      <br />
      <EditableMathField
        style={{ width: 400, height: 200 }}
        onChange={mathField => setText(mathField.latex())}
      />
      <br />
      <div className="btns">
        <button className="btn btn-outline-success" onClick={() => save()}>
          Save
        </button>
        <Link to="/">
          <button className="btn btn-outline-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Math;
