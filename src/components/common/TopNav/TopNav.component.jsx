import React from 'react';
import { Link } from 'react-router-dom';

import UserProfile from './UserProfile/UserProfile.component';

import './TopNav.style.scss';

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav">
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Prilims
            </Link>
          </li>
        </ul>
      </div>
      {!localStorage.getItem('excelId')?(
        <span
        className="navbar-brand link-item"
        data-toggle="modal"
        data-target="#userProfile"
      >
        <i className="fa fa-user-circle"></i> Ajesh
      </span>):(
        <span
        className="navbar-brand link-item"
      >
        <Link to='/login' className="navL" ><i className="fa fa-sign-in"></i> Login</Link>
      </span>
      )}
    </nav>
  );
};

export default TopNav;
