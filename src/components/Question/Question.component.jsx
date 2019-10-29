import React, {useState} from 'react';
import './Question.style.scss';

const Option = ({ no, val, selected, setSelected }) => {
  const clickHanh = () => {
    const ted = [false, false, false, false];
    ted[no-1] = true;
    setSelected(ted);
  }
  let opClass = "info";
  console.log(selected[2]);
  if(selected[no-1]){
    opClass = "success";
  }
  return (<div className="col-lg-6">
    <div onClick = {clickHanh} className={`btn btn-block btn-${opClass} p-2 m-2 option`}>
      {val}
    </div>
  </div>);
}

const Question = () => {
  const [selected, setSelected] = useState([false, false, false, false]);
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded question">
      <div className="card-body">This is a Question. Select the answer?</div>
      <div className="card-footer">
        <div className="row">
          <Option no={1} val="Option 1" selected={selected} setSelected={setSelected}/>
          <Option no={2} val="Option 2" selected={selected} setSelected={setSelected}/>
          <Option no={3} val="Option 3" selected={selected} setSelected={setSelected}/>
          <Option no={4} val="Option 4" selected={selected} setSelected={setSelected}/>
        </div>
      </div>
    </div>
  );
};

export default Question;
