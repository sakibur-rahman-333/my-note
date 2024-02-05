import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";
import "./EditNote.css";
import { connect } from "react-redux";
import myStore from "../../redux/Store";

const mapStateToProps = (state) => {
  return {
    editableNote: state.editableNote,
  };
};

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const key = this.props.editableNote.key;
    const time = new Date();
    const noteTitle = e.target.elements.noteTitle.value;
    const note = e.target.elements.note.value;
    const createdTime =
      time.getFullYear() +
      "-" +
      time.getMonth() +
      "-" +
      time.getDate() +
      " " +
      time.getHours() +
      ":" +
      time.getMinutes();

    localStorage.setItem(
      key,
      JSON.stringify({
        key: key,
        noteTitle: noteTitle,
        note: note,
        createdTime: createdTime,
      })
    );
    e.target.elements.noteTitle.value = "";
    e.target.elements.note.value = "";

    this.setState({
      showAlert: true,
    });
    myStore.dispatch({
      type: "ITEM_UNSELECTED",
      value: "",
    });
  };
  render() {
    const showAlert = this.state.showAlert ? (
      <Alert color="primary">Note updated successfully!.</Alert>
    ) : null;
    return (
      <Form className="create-form" onSubmit={this.handleSubmit}>
        {showAlert}
        <FormGroup>
          <h3>Note title</h3>
          <Input
            name="noteTitle"
            placeholder="Title of the note..."
            type="text"
            onChange={this.handelChange}
            defaultValue={this.props.editableNote.noteTitle}
            required
          />
        </FormGroup>
        <FormGroup>
          <h3>Note</h3>
          <Input
            name="note"
            className="text-area"
            type="textarea"
            placeholder="Write what to save..."
            onChange={this.handelChange}
            defaultValue={this.props.editableNote.note}
            required
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps)(EditNote);
