import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { addStyles, StaticMathField } from "react-mathquill";
// import ReactToPdf from "react-to-pdf";

import "./mypaper.css";
import { constants } from "fs";

function Paper(props) {
  const location = useLocation();
  const history = useHistory();

  location.stateQuestionI === undefined && history.push("/");

  useEffect(() => {
    console.log("usereffect");
  }, []);

  return (
    <div>
      <div id="paper">
        <div id="header">
          <div id="title">
            <h1>RAMANUJAN CLASSES</h1>
          </div>
          <div id="sub-title">
            <h3>Time:-</h3>
            <h3>Subject:- Math</h3>
            <h3>Class:- {location.state}</h3>
            <h3>MM:- </h3>
          </div>
        </div>
        <div id="content">
          {location.stateQuestionI.length != 0 && <p>Section - A</p>}

          <ol>
            <li>All questions are compulsory:-</li>
            <ol type="i">
              {location.stateQuestionI.map(question => {
                return (
                  <li>
                    <StaticMathField>{question}</StaticMathField>
                  </li>
                );
              })}
            </ol>
            {location.stateQuestionII.length != 0 && <p>Section - B</p>}
            {location.stateQuestionII.map(question => {
              return (
                <li>
                  <StaticMathField>{question}</StaticMathField>
                </li>
              );
            })}
            {location.stateQuestionIII.length != 0 && <p>Section - C</p>}
            {location.stateQuestionIII.map(question => {
              return (
                <li>
                  <StaticMathField>{question}</StaticMathField>
                </li>
              );
            })}
            {location.stateQuestionIV.length != 0 && <p>Section - D</p>}
            {location.stateQuestionIV.map(question => {
              return (
                <li>
                  <StaticMathField>{question}</StaticMathField>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Paper;
