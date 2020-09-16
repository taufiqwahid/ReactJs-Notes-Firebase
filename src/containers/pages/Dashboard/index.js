import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTitlePage } from "../../../config/redux/action";

export class Dashboard extends Component {
  ChangeThisTitle = () => {
    this.props.ChangeThisTitleProps();
  };
  render() {
    return (
      <div>
        <h3>{this.props.titlePageProps}</h3>
        <div>
          <button onClick={this.ChangeThisTitle}>
            Ke Dashboard Taufiq Wahid
          </button>
        </div>
        <br />
        <Link to="/register">
          <button>Go to Register</button>
        </Link>
        <Link to="/">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    );
  }
}
const reduxState = (state) => ({
  titlePageProps: state.isTitlePage,
});

const reduxDispatch = (dispatch) => {
  return {
    ChangeThisTitleProps: () => dispatch(changeTitlePage),
  };
};

// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, reduxDispatch)(Dashboard);
