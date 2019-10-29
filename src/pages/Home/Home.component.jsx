import React from 'react';

import withLogin from '../../HOC/withLogin';

import './Home.style.scss';

const statuses = {
  selected: 'success',
  pending: 'info',
  finished: 'secondary',
};


const Event = ({ i, name, status }) => {
  return(
      <div className="sub">
          <div className="dashHead d1">
              <h5>{i+1}</h5>
          </div>
          <div className="dashHead d2">
              <h5>{name}</h5>
          </div>
          <div className="dashHead d3">
              <span className={`btn btn-sm btn-${statuses[status]} hbt`}>{status}</span>
          </div>
      </div>
  );
};


const Events = [
  { name: 'Algorithms', status: 'selected' },
  { name: 'Loard of Code', status: 'finished' },
  { name: 'Debug', status: 'pending' },
];

const Home = () => {
  return (
    <div className="home">
      <div>
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <div className="main">
              <div className="dashHead dh1">
                  <h4>#</h4>
              </div>
              <div className="dashHead dh2">
                  <h4>Event</h4>
              </div>
              <div className="dashHead dh3">
                  <h4>Status</h4>
              </div>
          </div>
          <div className = "dashList">
                {Events.map((e, i) => (
                  <Event {...e} key={i} i={i} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default withLogin(Home);
