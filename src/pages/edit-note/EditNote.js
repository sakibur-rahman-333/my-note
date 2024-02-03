import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./EditNote.css";

class EditNote extends Component {
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
            required
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default EditNote;
