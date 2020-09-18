import React, { Component } from "react";
import { connect } from "react-redux";
import "../Dashboard/Dashboard.scss";
import { addDataToFirebase } from "../../../config/redux/action";

export class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    data: "",
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: this.props.userData.uid,
    };
    if (data.userId === undefined) {
      alert("Silahkan Login Dlu");
      console.log("Tidak Ditemukan UID, Silahkan Login");
      this.setState({
        title: "",
        content: "",
        data: "",
      });
      const { history } = this.props;
      history.push("/login");
    } else {
      this.props.saveNotes(data);
    }
    console.log("SAVE NOTES = ", data);
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="notes">
        <h1>Simple Notes Firebase</h1>
        <div className="inputContent">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            name="content"
            id="content"
            rows="5"
            placeholder="content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          ></textarea>
          <button onClick={this.handleSaveNotes}>Simpan</button>
        </div>
        <hr />
        <div className="content">
          <h4>Title</h4>
          <p className="tanggal">21 april 1999</p>
          <p className="contentNotes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt,
            quod quo ut iusto maiores aut velit obcaecati! Deleniti aspernatur
            in facilis ipsa eos quisquam! Optio dicta deleniti quia vero.tent
          </p>
        </div>
        <div className="content">
          <h4>Title</h4>
          <p className="tanggal">21 april 1999</p>
          <p className="contentNotes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt,
            quod quo ut iusto maiores aut Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia sed nostrum excepturi, molestias nesciunt ut
            maiores natus beatae repellat odit, eligendi eaque eveniet. Fugiat
            vel fugit animi quasi, odit obcaecati!lit obcaecati! Deleniti
            aspernatur in facilis ipsa eos quisquam! Optio dicta deleniti quia
            vero.tent
          </p>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.isUser,
});

const reduxDispatch = (dispatch) => {
  return {
    saveNotes: (data) => dispatch(addDataToFirebase(data)),
  };
};

// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, reduxDispatch)(Dashboard);
