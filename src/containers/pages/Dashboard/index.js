import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../Dashboard/Dashboard.scss";
import {
  addDataToFirebase,
  getDataToFirebase,
} from "../../../config/redux/action";
import FadeIn from "react-fade-in";

export class Dashboard extends Component {
  state = {
    title: "",
    content: "",
    data: "",
  };

  componentDidMount() {
    if (localStorage.getItem("dataUser")) {
      const dataUser = JSON.parse(localStorage.getItem("dataUser"));
      this.props.getNotes(dataUser.uid);
    } else {
      alert("Silahkan Login atau Register terlebih dahulu");
      const { history } = this.props;
      history.push("/register");
    }
  }

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  handleSaveNotes = () => {
    const { title, content } = this.state;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    console.log("localStorage", dataUser);

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: dataUser.uid,
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
      this.setState({
        title: "",
        content: "",
        data: "",
      });
      if (title && content) {
        this.props.saveNotes(data);
      } else {
        alert("Lengkapi Title dan Contentnya terlebih dahulu");
      }
    }
    console.log("SAVE NOTES = ", data);
  };

  handleOnClick() {
    alert("aaaa");
  }

  render() {
    const { title, content } = this.state;
    const { notes } = this.props;
    console.log("NOTES:", notes);
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
        {notes.length > 0 ? (
          <Fragment>
            <FadeIn delay={50} transitionDuration={1000}>
              {notes.map((note) => {
                return (
                  <div className="container" key={note.id}>
                    <div className="content">
                      <h4 className="title">{note.data.title}</h4>
                      <h4 className="close" onClick={this.handleOnClick}>
                        X
                      </h4>
                      <p className="tanggal">{note.data.date}</p>
                      <p className="contentNotes">{note.data.content}</p>
                    </div>
                  </div>
                );
              })}
            </FadeIn>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.isUser,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => {
  return {
    saveNotes: (data) => dispatch(addDataToFirebase(data)),
    getNotes: (data) => dispatch(getDataToFirebase(data)),
  };
};

// connect(statenya, nilai state yg ingin diubah)
export default connect(reduxState, reduxDispatch)(Dashboard);
