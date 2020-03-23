import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../config";
import { addStyles, StaticMathField } from "react-mathquill";

var database = firebase.database();

const Select = props => {
  const [data, setData] = useState([{ question: "loading...." }]);
  const location = useLocation();

  useEffect(() => {
    console.log("selected >>", location.state);
    var cls = database.ref(`${location.state}/`);
    cls.on(
      "value",
      function(snapshot) {
        const datas = Object.values(snapshot.val());
        setData(datas);
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
  }, []);

  const create = () => {
    console.log("created");
  };

  const randerItem = data => {
    return (
      <div className="lists">
        <ol class="list-group">
          {data.map(data => {
            return (
              <div className="item">
                <li className="list-group-item">
                  <input type="checkbox" />
                  <StaticMathField>{data.question}</StaticMathField>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    );
  };

  return (
    <div>
      <h1>Question are</h1>
      {randerItem(data)}
      <div className="btns">
        <button className="btn btn-outline-success" onClick={() => create()}>
          Genrate
        </button>
        <Link to="/">
          <button className="btn btn-outline-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Select;
