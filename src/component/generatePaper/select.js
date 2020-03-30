import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import firebase from "../../config";
import { addStyles, StaticMathField } from "react-mathquill";

var database = firebase.database();

const Select = props => {
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState([{ question: "loading...." }]);
  const [type, setType] = useState("");
  const [selectedQuestionsI, setSelectedQuestionsI] = useState([]);
  const [selectedQuestionsII, setSelectedQuestionsII] = useState([]);
  const [selectedQuestionsIII, setSelectedQuestionsIII] = useState([]);
  const [selectedQuestionsIV, setSelectedQuestionsIV] = useState([]);

  useEffect(() => {
    setType(location.stateType);
    var cls = database.ref(`${location.state}/`);
    cls.on(
      "value",
      function(snapshot) {
        const datas = snapshot.val();
        console.log(datas);
        if (datas === null) {
          alert("there are no data");
          history.push("/");
        } else {
          console.log("complete data =>", Object.keys(datas));
          console.log("snapshot object value--->>>", Object.values(datas));
          let obj = Object.values(datas);
          let arrID = Object.keys(datas);
          let i = 0;
          obj.map(o => {
            o.id = arrID[i];
            i = i + 1;
          });
          console.log(obj);

          setData(obj);
        }
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
  }, []);
  const remove = e => {
    console.log("removed");
    //   (    type === 'Very Short Questions'
    //       ? let arr = remove(selectedQuestionsI,e.target.value)
    //         setSelectedQuestionsI(arr)
    //       :
    //      (  type === 'Short Type-I Questions'
    //        ? (let arr = remove(selectedQuestionsII,e.target.value)
    //         setSelectedQuestionsII(arr))
    //        :
    //  (       type === 'Short Type-II Questions'
    //         ? (let arr = remove([...selectedQuestionsIII],e.target.value)
    //         setSelectedQuestionsIII(arr))
    //          : (let arr = remove([...selectedQuestionsIV],e.target.value)
    //         setSelectedQuestionsIV(arr))
    // return arr.filter(item => {
    //   return item != value;
    // });
  };

  const selectedQuestions = e => {
    console.log("question is", e.target.checked);
    console.log("type is", type);
    console.log("question is", e.target.value);

    type === "Very Short Questions"
      ? setSelectedQuestionsI([...selectedQuestionsI, e.target.value])
      : type === "Short Type-I Questions"
      ? setSelectedQuestionsII([...selectedQuestionsII, e.target.value])
      : type === "Short Type-II Questions"
      ? setSelectedQuestionsIII([...selectedQuestionsIII, e.target.value])
      : setSelectedQuestionsIV([...selectedQuestionsIV, e.target.value]);
  };

  const randerItem = data => {
    let new_data = data.filter(data => {
      return data.type === type;
    });
    console.log("type", type);
    console.log("after filter data --->>", new_data.length);
    return new_data.length === 0 ? (
      <tr>
        <td colSpan="5">
          There are no questions of this type. Please select other types
        </td>
      </tr>
    ) : (
      new_data.map(data => {
        return data.question === "No\\ Question\\ Found" ? (
          <tr>
            <td colSpan="5">
              There are no questions of this type. Please select other types
            </td>
          </tr>
        ) : data.question === "loading...." ? (
          <tr>
            <td colSpan="5">loading....</td>
          </tr>
        ) : (
          <tr>
            <td>
              <input
                type="checkbox"
                value={data.question}
                onChange={e =>
                  e.target.checked ? selectedQuestions(e) : remove(e)
                }
              />
            </td>
            <td>
              <StaticMathField>{data.question}</StaticMathField>
            </td>
            <td>{data.chapter}</td>
            <td>{data.type}</td>
            <td>
              <button
                className="option-btn btn-danger"
                onClick={() => {
                  var cls = database.ref(`${location.state}/` + data.id);
                  cls.remove();
                }}
              >
                Delete
              </button>
              {/* <button
                className="my-btn btn-warning"
                onClick={() => console.log("data", data)}
              >
                Update
              </button> */}
            </td>
          </tr>
        );
      })
    );
  };

  console.log("changed", selectedQuestionsI);
  console.log("changed", selectedQuestionsII);
  console.log("changed", selectedQuestionsIII);
  console.log("changed", selectedQuestionsIV);
  return (
    <div>
      <h1>Class {location.state} - Question are</h1>
      <ul className="my-nav">
        <li
          className="my-nav-item"
          onClick={() => setType("Very Short Questions")}
        >
          {/* <input type="checkbox" id="c1" value="Very Short Questions" /> */}
          <p>Very Short Questions</p>
        </li>
        <li
          className="my-nav-item"
          onClick={() => setType("Short Type-I Questions")}
        >
          {/* <input type="checkbox" id="c2" value="Short Type-I Questions" /> */}
          <p>Short Type-I Questions</p>
        </li>
        <li
          className="my-nav-item"
          onClick={() => setType("Short Type-II Questions")}
        >
          {/* <input type="checkbox" id="c3" value="Short Type-II Questions" /> */}
          <p>Short Type-II Questions</p>
        </li>
        <li className="my-nav-item" onClick={() => setType("Long Questions")}>
          {/* <input type="checkbox" id="c4" value="Long Questions" /> */}
          <p>Long Questions</p>
        </li>
      </ul>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Chapter</th>
            <th scope="col">Type</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>{randerItem(data)}</tbody>
      </table>
      <h4>Select Question are </h4>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Section A</th>
          </tr>
        </thead>
        <tbody>
          {selectedQuestionsI.length === 0 ? (
            <tr>
              <td>No Question is Selected</td>
            </tr>
          ) : (
            selectedQuestionsI.map(question => {
              return (
                <tr>
                  <td>
                    <StaticMathField>{question}</StaticMathField>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        <thead>
          <tr>
            <th scope="col">Section B</th>
          </tr>
        </thead>
        <tbody>
          {selectedQuestionsII.length === 0 ? (
            <tr>
              <td>No Question is Selected</td>
            </tr>
          ) : (
            selectedQuestionsII.map(question => {
              return (
                <tr>
                  <td>
                    <StaticMathField>{question}</StaticMathField>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        <thead>
          <tr>
            <th scope="col">Section C</th>
          </tr>
        </thead>
        <tbody>
          {selectedQuestionsIII.length === 0 ? (
            <tr>
              <td>No Question is Selected</td>
            </tr>
          ) : (
            selectedQuestionsIII.map(question => {
              return (
                <tr>
                  <td>
                    <StaticMathField>{question}</StaticMathField>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        <thead>
          <tr>
            <th scope="col">Section D</th>
          </tr>
        </thead>
        <tbody>
          {selectedQuestionsIV.length === 0 ? (
            <tr>
              <td>No Question is Selected</td>
            </tr>
          ) : (
            selectedQuestionsIV.map(question => {
              return (
                <tr>
                  <td>
                    <StaticMathField>{question}</StaticMathField>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="btns">
        <Link
          to={{
            pathname: "/Paper/" + location.state,
            state: location.state,
            stateQuestionI: selectedQuestionsI,
            stateQuestionII: selectedQuestionsII,
            stateQuestionIII: selectedQuestionsIII,
            stateQuestionIV: selectedQuestionsIV
          }}
        >
          {selectedQuestionsI ? (
            <button className="btn btn-outline-success">Genrate</button>
          ) : (
            <button className="btn btn-outline-success">Genrate</button>
          )}
        </Link>
        <button
          className="btn btn-outline-warning"
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <Link to="/">
          <button className="btn btn-outline-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Select;
