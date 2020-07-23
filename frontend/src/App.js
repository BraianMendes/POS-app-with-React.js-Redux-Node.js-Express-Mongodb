import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import Profile from "./pages/ProfilePage";
import PasswordForgotPage from './pages/password/PasswordForgotPage';
import PasswordResetPage from './pages/password/PasswordResetPage';


const isLoggedIn = () => {
  return localStorage.getItem('TOKEN_KEY') != null;
};

// Verify if is Logged In with JWT
// If it's not send so to LoginPage
const SecuredRoute = ({ component: Component, ...rest }) => (
    
  <Route
    {...rest}
    render={props =>
    
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default class App extends Component {
  
  render() {
    // const {pathname} = this.props.location;
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/login/:notify?" component={Login} /> */}
            <Route exact path="/password-reset/:token" component={PasswordResetPage} />
            <Route exact path="/password/forgot" component={PasswordForgotPage} />
            <SecuredRoute path="/profile" component={Profile} />
            <SecuredRoute path="/dashboard" component={Dashboard} />
          </div>
        </Switch>
      </Router>
    );
  }
}

