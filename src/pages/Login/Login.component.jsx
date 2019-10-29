import React, { useState } from 'react';
import { login } from '../../config/auth';
import './Login.style.scss';

const Login = ({ history }) => {
  const [excelId, setExcelId] = useState('');
  return (
    <div className="wrapper fadeInDown login">
      <div id="formContent">
        <div className="fadeIn first">
          <div className="user">
            <i className="fa fa-user-circle-o" />
          </div>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            login(excelId, history);
          }}
        >
          <input
            type="text"
            id="excelID"
            className="fadeIn second"
            name="excelID"
            value={excelId}
            onChange={e => setExcelId(e.target.value)}
            placeholder="Excel ID"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
