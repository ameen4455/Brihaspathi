import React from 'react';
import './Login.style.scss';

const Login = () => {
  return (
    <div className="wrapper fadeInDown login">
      <div id="formContent">
        <div className="fadeIn first">
          <div className="user">
            <i className="fa fa-user-circle-o" />
          </div>
        </div>

        <form>
          <input
            type="text"
            id="excelID"
            className="fadeIn second"
            name="excelID"
            placeholder="Excel ID"
          />
          <input
            type="text"
            id="pin"
            className="fadeIn third"
            name="pin"
            placeholder="PIN"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
