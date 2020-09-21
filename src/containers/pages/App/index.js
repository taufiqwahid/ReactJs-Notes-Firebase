import React from "react";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
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
          <div className="nav">
            <Redirect
              exact
              from="/ReactJs-Notes-Firebase/"
              to="/ReactJs-Notes-Firebase/home"
            />

            <Link className="link" to="/ReactJs-Notes-Firebase/home">
              Home
            </Link>

            <Link className="link" to="/ReactJs-Notes-Firebase/dashboard">
              Dashboard
            </Link>

            <Link className="link" to="/ReactJs-Notes-Firebase/login">
              Login
            </Link>

            <Link className="link" to="/ReactJs-Notes-Firebase/register">
              Register
            </Link>

            <Link className="link" to="/ReactJs-Notes-Firebase/logout">
              Logout
            </Link>
          </div>
          <Route
            path="/ReactJs-Notes-Firebase/home"
            exact
            component={Homepage}
          />
          <Route
            path="/ReactJs-Notes-Firebase/dashboard"
            component={Dashboard}
          />
          <Route path="/ReactJs-Notes-Firebase/login" component={Login} />
          <Route path="/ReactJs-Notes-Firebase/register" component={Register} />
          <Route path="/ReactJs-Notes-Firebase/logout" component={Logout} />
        </div>
      </Router>
    </Provider>
  );
  // return (
  //   <Provider store={store}>
  //     <Router>
  //       <div className="wrapper">
  //         <div className="nav">
  //           <Redirect exact from="/" to="home" />

  //           <Link className="link" to="/home">
  //             Home
  //           </Link>

  //           <Link className="link" to="/dashboard">
  //             Dashboard
  //           </Link>

  //           <Link className="link" to="/login">
  //             Login
  //           </Link>

  //           <Link className="link" to="/register">
  //             Register
  //           </Link>

  //           <Link className="link" to="/logout">
  //             Logout
  //           </Link>
  //         </div>
  //         <Route path="/home" exact component={Homepage} />
  //         <Route path="/dashboard" component={Dashboard} />
  //         <Route path="/login" component={Login} />
  //         <Route path="/register" component={Register} />
  //         <Route path="/logout" component={Logout} />
  //       </div>
  //     </Router>
  //   </Provider>
  // );
}

export default App;
