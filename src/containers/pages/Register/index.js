import React, { Component } from "react";
import "./Register.scss";
// import firebase from "../../../config/firebase";

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

  handleRegisterValue = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .registerAPI({ email: email, password: password })
      .catch((err) => err);

    if (res === true) {
      this.setState({
        email: "",
        password: "",
      });
    }
    const { history } = this.props;
    history.push("/ReactJs-Notes-Firebase/login");
    // history.push("/login");
  };

  render() {
    return (
      <div className="register">
        <form action="#">
          <h2>Register Page</h2>
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
