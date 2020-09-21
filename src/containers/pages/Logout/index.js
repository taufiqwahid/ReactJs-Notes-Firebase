import React, { Component } from "react";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("dataUser");
    const { history } = this.props;
    history.push("/login");
  }
  render() {
    return (
      <div>
        <h1>Data Login Telah Terhapus</h1>
      </div>
    );
  }
}
