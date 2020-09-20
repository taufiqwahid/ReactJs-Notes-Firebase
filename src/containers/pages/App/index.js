import React from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";
import "./App.scss";
import Homepage from "../Homepage";
import Logout from "../Logout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper">
          <nav>
            <Link to="/home">Home</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>

            <Link to="/logout">Logout</Link>
          </nav>

          <Route path="/home" exact component={Homepage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
