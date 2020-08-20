import React, { Component } from "react";
import {Burger} from './components/Burger'
import "./Hamburger.css";

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Burger />
      </>
    );
  }
}