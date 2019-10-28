import React from 'react';
import './Question.style.scss';

const Option = ({ no, val }) => (
  <div className="col-lg-6">
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="Radios"
        id={`Radios${no}`}
        value="option1"
      />
      <label className="form-check-label" htmlFor={`Radios${no}`}>
        {val}
      </label>
    </div>
  </div>
);

const Question = () => {
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded question">
      <div className="card-body">This is a Question. Select the answer?</div>
      <div className="card-footer">
        <div className="row">
          <Option no={1} val="Option 1" />
          <Option no={2} val="Option 2" />
          <Option no={3} val="Option 3" />
          <Option no={4} val="Option 4" />
        </div>
      </div>
    </div>
  );
};

export default Question;
