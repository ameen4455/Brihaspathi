import React, { useState, useEffect } from 'react';
import { getQuestionIds } from '../../config/api';
import './QuestionBar.style.scss';

const Question = ({ n, event, id, current }) => {
  let status = '';
  if (id === parseInt(current)) {
    status = 'active-q';
  }
  return (
    <li className={`list-group-item ${status}`}>
      <a href={`/prelims/${event}/${id}`}>{n}</a>
    </li>
  );
};

const QuestionBar = ({ match }) => {
  const [questionIds, setQuestionIds] = useState([]);
  useEffect(() => {
    getQuestionIds(match.params.event).then(res => setQuestionIds(res));
  }, []);
  return (
    <div className="card q-bar">
      <div className="card-content">
        <ul className="list-group">
          {questionIds.map((q, i) => (
            <Question
              key={i}
              n={i + 1}
              id={q}
              event={match.params.event}
              current={match.params.question}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionBar;
