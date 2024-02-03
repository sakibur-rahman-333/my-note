import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./MainComponent.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CreateNote from "../../pages/create-note/CreateNote";
import ShowNotes from "../../pages/show-notes/ShowNotes";
import Contract from "../../pages/contract/Contract";
import Blogs from "../../pages/blogs/Blogs";
import EditNote from "../../pages/edit-note/EditNote";

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <hr />
        <div className="body-footer">
          <Route exact path="/" render={() => <ShowNotes />} />
          <Route exact path="/create-note" render={() => <CreateNote />} />
          <Route exact path="/contract" render={() => <Contract />} />
          <Route exact path="/blogs" render={() => <Blogs />} />
          <Route exact path="/edit-note" render={() => <EditNote />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default MainComponent;
