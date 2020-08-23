import React, { useState, useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { addStyles, EditableMathField } from 'react-mathquill';

import firebase from '../../config';

var database = firebase.database();

addStyles();

const Math = (props) => {
  const [question, setQuestion] = useState('');
  const location = useLocation();
  let history = useHistory();
  let chapter = location.ChapterState;
  let type = location.TypeState;
  useEffect(() => {
    location.ChapterState === undefined && history.push('/');
  }, []);

  const save = () => {
    console.log('question>>', question);
    var cls = database.ref(`${location.state}/`);
    cls.push({
      question,
      chapter,
      type,
    });
    alert('save data');
    location.ChapterState === undefined && history.push('/');
  };

  return (
    <div>
      <h1>Enter New Question </h1>
      tip: press <b>tap</b> for change position of curser
      <br />
      <br />
      <EditableMathField
        style={{ width: 400, height: 200 }}
        onChange={(mathField) => setQuestion(mathField.latex())}
      />
      <br />
      <div className='btns'>
        <button className='btn btn-outline-success' onClick={() => save()}>
          Save
        </button>
        <button
          className='btn btn-outline-warning'
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <Link to='/'>
          <button className='btn btn-outline-primary'>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Math;
