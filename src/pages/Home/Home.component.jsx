import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../config/api';
import withLogin from '../../HOC/withLogin';
import './Home.style.scss';

const statuses = {
  NotStarted: 'success',
  Started: 'info',
  Finished: 'secondary',
};

const Event = ({ i, name, id, is_active, event_ended }) => {
  let status = 'NotStarted';
  if (is_active) {
    status = 'Started';
  }
  if (event_ended) {
    status = 'Finished';
  }
  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td>
        <Link to={`/prelims/${id}`}>{name}</Link>
      </td>
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
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then(res => setEvents(res.results));
  }, []);
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
              {events.map((e, i) => {
                return <Event {...e.event} key={i} i={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withLogin(Home);
