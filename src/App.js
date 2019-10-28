import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import Prilims from './pages/Prilims/Prilims.component';
import Navbar from './components/common/TopNav/TopNav.component';
import Login from './pages/Login/Login.component';
import './App.scss';

const App = () => (
  <div>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/prilims" component={Prilims} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </div>
);

export default App;
