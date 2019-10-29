import React from 'react';

import withLogin from '../../HOC/withLogin';

import './Home.style.scss';

const statuses = {
  selected: 'success',
  pending: 'info',
  finished: 'secondary',
};

const Event = ({ i, name, status }) => {
  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{name}</td>
      <td>
        <span className={`btn btn-sm btn-${statuses[status]}`}>{status}</span>
      </td>
    </tr>
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
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Dashboard</h4>
        </div>
        <div className="card-content collpase show">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {Events.map((e, i) => (
                <Event {...e} key={i} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withLogin(Home);
