import React, { useState, useEffect } from 'react';
import { getQuestion } from '../../config/api';
import './Question.style.scss';

const Option = ({ no, val, selected, setSelected }) => {
  const clickHanh = () => {
    const ted = [false, false, false, false];
    ted[no - 1] = true;
    setSelected(ted);
  };
  let opClass = 'info';
  if (selected[no - 1]) {
    opClass = 'success';
  }
  return (
    <div className="col-lg-6">
      <div
        onClick={clickHanh}
        className={`btn btn-block btn-${opClass} p-2 m-2 option`}
      >
        {val}
      </div>
    </div>
  );
};

const Question = ({match}) => {
  const [selected, setSelected] = useState([false, false, false, false]);
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getQuestion(match.params.question).then(res => {
      setQuestion(res[0]);
      setOptions(res[1]);
    });
  }, []);
  console.log(match);
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded question">
      <div className="card-body">{question.question}</div>
      <div className="card-footer">
        <div className="row">
          {options.map((op, i) => (
            <Option
              no={i}
              key={i}
              val={op.answer}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
