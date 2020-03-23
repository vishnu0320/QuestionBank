import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./mycss.css";

function AddQuestion() {
  const [cls, setCls] = useState("");

  function myFunction() {
    var x = document.getElementById("inputGroupSelect01").value;
    setCls(x);
  }
  return (
    <div className="container">
      <div className="main">
        <h3>Genrate Paper</h3>
        <div className="category">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Select Class
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              onChange={() => myFunction()}
            >
              <option value="---">----</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </div>

        <div className="btns">
          <Link to={{ pathname: "/select/" + cls, state: cls }}>
            <button type="button" class="btn btn-outline-success">
              Next
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
