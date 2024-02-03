import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./CreateNote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const key = Math.floor(Math.random() * 10000 + 1);
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
            required
          />
        </FormGroup>
        <FormGroup>
          <h3>Note</h3>
          <Input
            className="text-area"
            name="note"
            type="textarea"
            placeholder="Write what to save..."
            required
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default CreateNote;
