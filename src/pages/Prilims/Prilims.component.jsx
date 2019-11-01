import React from 'react';
import withLogin from '../../HOC/withLogin';
import Question from '../../components/Question/Question.component';
import QuestionBar from '../../components/QuestionBar/QuestionBar.component';
import Timer from '../../components/timer/timer.component';

const Prilims = props => {
  const clickHand = () => {
    props.history.push('/');

    fetch(`http://13.233.133.214:8000/api/events/${props.match.params.event}/participants`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        "is_prelims_completed": true,
        "excel_id" : localStorage.getItem('excelId')
      })

  });
}
  return (
    <div>
      <div>
        <h4>
          <div className="d-flex">
            <div className="m-1">Time: <Timer fun = {clickHand}  match={props.match}/></div>
            <div className="flex-grow-1 text-right m-1">
              <button onClick={clickHand} className="btn btn-success btn-lg">Finish</button>
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
