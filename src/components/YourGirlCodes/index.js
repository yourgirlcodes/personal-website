import React, { Component } from "react";
import { MediumCarousel } from "./components/MediumCarousel";
import { SideBar } from "./components/SideBar";
import { BottomBar } from "./components/BottomBar";
import { YGCIntro } from "./components/YGCIntro";
<<<<<<< HEAD
import {YGCHeader} from './components/YGCHeader'
=======
>>>>>>> parent of 13508db... changing yourgirlcodes to table
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
<<<<<<< HEAD
      <div className="YGC-container">
      <YGCHeader />
        {/* <SideBar /> */}
        {/* <BottomBar /> */}
        {/* <MediumCarousel /> */}
=======
>>>>>>> parent of 13508db... changing yourgirlcodes to table
        <YGCIntro />

        <SideBar />
        <BottomBar />
        <MediumCarousel />
<<<<<<< HEAD
        </div>

=======
>>>>>>> parent of 13508db... changing yourgirlcodes to table
    );
  }
}
