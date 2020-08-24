import React, { Component } from "react";
import { MediumCarousel } from "./components/MediumCarousel";
import { YGCMiddle } from "./components/SideBar";
import { BottomBar } from "./components/BottomBar";
import { YGCIntro } from "./components/YGCIntro";
import { YGCHeader } from "./components/YGCHeader";
import "./YourGirlCodes.css";

export default class YourGirlCodes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="background">
        <div id="tertiary">
          <div id="secondary">
            <div id="primary" />
            <div id="primary-1" />
            <div id="primary-2" />
          </div>
        </div>

        <div className="YGC-container">
          <YGCHeader />
          <YGCMiddle />
        </div>
      </div>
    );
  }
}
