import React from "react";
import { Link } from "react-router-dom";

import "./mycss.css";

function Home() {
  return (
    <div className="container">
      <div className="main">
        <h1>
          Welcome to <br />
          Question Bank
        </h1>
        <div className="btns">
          <Link to="/addQuestion">
            <button type="button" class="btn btn-outline-success">
              Add Question
            </button>
          </Link>
          <Link to="/genratePaper">
            <button type="button" class="btn btn-outline-success">
              Genrate Question Paper
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
