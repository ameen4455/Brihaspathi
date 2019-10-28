import React from 'react';
import './QuestionBar.style.scss';

const Question = ({ n, status }) => <li className={`list-group-item ${status}`}>{n}</li>;

const questions = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

const QuestionBar = () => {
  return (
    <div className="card q-bar">
      <div className="card-content">
        <ul className="list-group">
          <Question n="1" status="active-q" />
          {questions.map(q => (
            <Question key={q} n={q} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionBar;
