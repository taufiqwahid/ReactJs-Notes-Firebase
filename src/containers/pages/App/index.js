import React from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
