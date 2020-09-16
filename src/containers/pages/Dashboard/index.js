import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.titlePageProps}</h3>
        <div></div>
        <br />
        <Link to="/register">
          <button>Go to Register</button>
        </Link>
        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    );
  }
}

const reduxState = (state) => ({
  titlePageProps: state.isTitlePage,
});

// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, null)(Dashboard);
