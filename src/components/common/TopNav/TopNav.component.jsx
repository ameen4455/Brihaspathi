import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import UserProfile from './UserProfile/UserProfile.component';

import './TopNav.style.scss';







const TopNav = () => {
  const [name, setName] = useState();
  useEffect(() => {
    fetch(`http://13.233.133.214:8000/api/excel_id?excel_id=EX1`)
    .then(res => res.json())
    .then(data => {
      setName(data[0].name);
    });
  }, []);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav">
    <div className="container">
      <button
        className="navbar-toggler mr-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <UserProfile />

      <div className="collapse navbar-collapse nv" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      {localStorage.getItem('excelId')?(
        <span
        className="navbar-brand link-item"
        data-toggle="modal"
        data-target="#userProfile"
      >
        <i className="fa fa-user-circle"></i> {name}
      </span>):(
        <span
        className="navbar-brand link-item"
      >
        <Link to='/login' className="navL" ><i className="fa fa-sign-in"></i> Login</Link>
      </span>
      )}
      </div>
    </nav>
  );
};

export default TopNav;
