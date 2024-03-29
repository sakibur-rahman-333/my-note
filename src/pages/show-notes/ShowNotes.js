import React, { Component } from "react";
import "./ShowNotes.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import myStore from "../../redux/Store";

class ShowNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedNote: null,
      modalOpen: false,
    };
  }
  componentDidMount() {
    let property = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      property[i] = value;
    }
    this.setState({
      data: property,
    });
  }

  handleView = (item) => {
    myStore.dispatch({
      type: "ITEM_SELECTED",
      value: item,
    });
    this.setState({
      selectedNote: item,
      modalOpen: true,
    });
  };

  handleCancel = () => {
    myStore.dispatch({
      type: "ITEM_UNSELECTED",
      value: "",
    });
    this.setState({
      selectedNote: null,
      modalOpen: false,
    });
  };

  handleDelete = () => {
    const key = this.state.selectedNote.key;
    localStorage.removeItem(key);
    this.handleCancel();
    this.setState({
      selectedNote: null,
    });
    this.componentDidMount();
  };
  render() {
    const data = this.state.data;
    const show =
      data !== null
        ? data.map((item) => {
            return (
              <Card
                className="my-2"
                style={{
                  width: "18rem",
                  marginRight: "1rem",
                }}
                key={item.key}
              >
                <CardHeader>{item.noteTitle}</CardHeader>
                <CardBody className="card-body">
                  <CardText className="card-text">{item.note}</CardText>
                  {/* <p className="card-text">{item.note}</p> */}
                  <Button onClick={() => this.handleView(item)}>View</Button>
                </CardBody>
              </Card>
            );
          })
        : null;

    const modal =
      this.state.modalOpen === true ? (
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>{this.state.selectedNote.noteTitle}</ModalHeader>
          <ModalBody>
            {this.state.selectedNote.note}
            <hr />
            <p>Created on: {this.state.selectedNote.createdTime}</p>
          </ModalBody>
          <ModalFooter>
            <Link to="/edit-note">
              <Button color="primary">Edit</Button>
            </Link>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      ) : null;
    return (
      <div className="show-note">
        {show}
        {modal}
      </div>
    );
  }
}

export default ShowNotes;
