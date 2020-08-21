import React, { Component } from "react";
import { MediumCarousel } from "./components/MediumCarousel";
import { YGCMiddle } from "./components/SideBar";
import { BottomBar } from "./components/BottomBar";
import { YGCIntro } from "./components/YGCIntro";
import {YGCHeader} from './components/YGCHeader'
import "./YourGirlCodes.css";

export default class YourGirlCodes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, scrollDir } = this.props;
    const breakpoint = 900;
    const screenType = width >= breakpoint ? "big" : "small";
    return (
      <div className="YGC-container">
      <YGCHeader />

        <YGCMiddle />
        <MediumCarousel />

        </div>

    );
  }
}
