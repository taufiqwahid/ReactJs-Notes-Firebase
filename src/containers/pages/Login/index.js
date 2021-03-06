import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";
import "../Login/Login.scss";

export class Login extends Component {
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

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .loginAPI({ email: email, password: password })
      .catch((err) => err);

    if (res === true) {
      const { history } = this.props;
      //cek hasil dari resolve di action menggunakan Promise
      console.log("Login sukses!");
      this.setState({
        email: "",
        password: "",
      });
      history.push("/");
    } else {
      console.log("Login Gagal!");
      this.setState({
        email: "",
        password: "",
      });
    }
  };

  render() {
    return (
      <div className="login">
        <form action="#">
          <h2>Login Page</h2>
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
            onClick={this.handleLoginSubmit}
            value="Login"
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
    loginAPI: (data) => dispatch(loginUserAPI(data)),
  };
};
// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, reduxDispatch)(Login);
