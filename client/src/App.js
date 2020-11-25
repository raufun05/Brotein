import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AuthForm from './pages/auth';
import HomePage from './pages/home';
import HealthPage from './pages/health';
import NewMealPage from './pages/new-meal';
import NewWorkOutPage from './pages/new-workout';
import HistoryPage from './pages/history';

class App extends Component {
  render() {
    return (

      <Router >

        <Route exact path="/" component={AuthForm} />
        <Route exact path="/home" component={HomePage} />
<<<<<<< HEAD
        <Route exact path="/health" Component={HealthPage} />
=======
        <Route exact path="/health" component={HealthPage} />
>>>>>>> 60cdbcb2c5d6671620e64fa6c95aadfc8762a5c0
        <Route exact path="/new-meal" component={NewMealPage} />
        <Route exact path="/new-workout" component={NewWorkOutPage} />
        <Route exact path="/history" component={HistoryPage} />

      </Router>
    );
  }
}



export default App;

