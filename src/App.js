import React, { Component } from "react";
//components
import Sections from "./components/Sections";
//utils
import apiServise from "./components/servises/PixabayApi";

class App extends Component() {
  state = {
    images: [],
    isLoading: false,
    searchQuery: "",
    error: null,
  };
  render() {
    <Sections></Sections>;
  }
}

export default App;
