import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./EditNote.css";
import { connect } from "react-redux";
import myStore from "../../redux/Store";

const mapStateToProps = (state) => {
  return {
    editableNote: state.editableNote,
  };
};

class EditNote extends Component {
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
    myStore.dispatch({
      type: "ITEM_UNSELECTED",
      value: "",
    });
  };
  render() {
    return (
      <Form className="create-form" onSubmit={this.handleSubmit}>
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
