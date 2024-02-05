import React, { Component } from "react";
import MainComponent from "./components/main-component/MainComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import myStore from "./redux/Store";

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
