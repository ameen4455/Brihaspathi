import React from 'react';
import withLogin from '../../HOC/withLogin';
import Question from '../../components/Question/Question.component';
import QuestionBar from '../../components/QuestionBar/QuestionBar.component';

const Prilims = props => {
  return (
    <div className="card prilims">
      <div className="card-header">
        <h4 className="card-title">
          <div className="d-flex">
            <div>Time: 00:20:53</div>
            <div className="flex-grow-1 text-right">
              <button className="btn btn-success">Finish</button>
            </div>
          </div>
        </h4>
      </div>
      <div className="card-content collpase show">
        <div className="d-flex bd-highlight">
          <div className="p-2">
            <QuestionBar {...props} />
          </div>
          <div className="p-2">
            <Question {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLogin(Prilims);
