import React, { Component } from "react";
import { MediumCarousel } from "./components/MediumCarousel";
import { SideBar } from "./components/SideBar";
import { BottomBar } from "./components/BottomBar";
import { YGCIntro } from "./components/YGCIntro";
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
        <YGCIntro />

        <SideBar />
        <BottomBar />
        <MediumCarousel />
    );
  }
}
