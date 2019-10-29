import React, { useState, useEffect } from 'react';
import { getQuestion, setAnswer as sendAnswer } from '../../config/api';
import './Question.style.scss';

const Option = ({ no, val, selected, setSelected, id, answer, clickHan }) => {
  let opClass = 'outline-info';
  if (id === answer) {
    opClass = 'info';
  }
  return (
    <div className="col-lg-6">
      <div
        onClick={() => clickHan(id)}
        className={`optBtn btn btn-block btn-${opClass} p-2 m-2 option`}
      >
        {val}
      </div>
    </div>
  );
};

const Question = ({ match }) => {
  const [selected, setSelected] = useState([false, false, false, false]);
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    getQuestion(match.params.question).then(res => {
      setAnswer(res[0]);
      setQuestion(res[1]);
      setOptions(res[2]);
    });
  }, []);
  const clickHan = id => {
    setAnswer(id);
    sendAnswer(question.id, id, match.params.event);
  };
  return (
    <div className="qBox shadow p-3 mb-5 bg-white rounded question">
      <div className="qHead">{question.question}</div>
      <div>
        <div className="row qrow">
          {options.map((op, i) => (
            <Option
              no={i}
              key={i}
              val={op.answer}
              id={op.id}
              answer={answer.answered}
              selected={selected}
              setSelected={setSelected}
              clickHan={clickHan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
