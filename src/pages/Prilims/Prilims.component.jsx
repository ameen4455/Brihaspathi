import React from 'react';
import withLogin from '../../HOC/withLogin';
import Question from '../../components/Question/Question.component';
import QuestionBar from '../../components/QuestionBar/QuestionBar.component';

const Prilims = props => {
  return (
    <div>
      <div>
        <h4>
          <div className="d-flex">
            <div className="m-1">Time: 00:20:53</div>
            <div className="flex-grow-1 text-right m-1">
              <button className="btn btn-success btn-lg">Finish</button>
            </div>
          </div>
        </h4>
      </div>
      <div className="card-content collpase show">
        <div className="d-flex bd-highlight">
          <div className="p-2">
            <QuestionBar {...props} />
          </div>
          <div className="p-2 flex-grow-1 ansCont">
            <Question {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLogin(Prilims);
