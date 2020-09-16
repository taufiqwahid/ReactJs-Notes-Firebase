import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionUser } from "../../../config/redux/action";

export class Dashboard extends Component {
  changeUser = () => {
    this.props.changeUserProps();
  };
  render() {
    return (
      <div>
        <h3>{this.props.userProps}</h3>
        <div>
          <button onClick={this.changeUser}>Ke Dashboard Taufiq Wahid</button>
        </div>
        <br />
        <Link to="/register">
          <button>Go to Register</button>
        </Link>
        <Link to="/register">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    );
  }
}
const reduxState = (state) => ({
  userProps: state.isUser,
});

const reduxDispatch = (dispatch) => {
  return {
    changeUserProps: () => dispatch(actionUser),
  };
};

// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, reduxDispatch)(Dashboard);
