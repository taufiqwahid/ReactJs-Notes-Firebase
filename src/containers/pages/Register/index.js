import React, { Component } from "react";
import "./Register.scss";
// import firebase from "../../../config/firebase";
import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button";

import { registerUserAPI } from "../../../config/redux/action";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      loading: false,
    });
  };

  handleRegisterValue = () => {
    const { email, password } = this.state;
    this.props.registerAPI({ email: email, password: password });
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="register">
        <h3>Register Page</h3>
        <form action="#">
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChangeValue}
            autoComplete="off"
            value={this.state.email}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChangeValue}
            value={this.state.password}
          />
          <Button
            className="submit"
            onClick={this.handleRegisterValue}
            value="Registration"
            loading={this.props.isLoading}
          />
        </form>

        <br />

        <Link to="/">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    );
  }
}

const reduxState = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

const reduxDispatch = (dispatch) => {
  return {
    registerAPI: (data) => dispatch(registerUserAPI(data)),
  };
};
export default connect(reduxState, reduxDispatch)(Register);
