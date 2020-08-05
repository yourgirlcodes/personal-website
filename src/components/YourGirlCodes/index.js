import React, { Component } from "react";
import YGCRightContainer from './components/YGCRightContainer';
import YGCLeftContainer from './components/YGCLeftContainer';
import {MediumCarousel} from './components/MediumCarousel'
import {YGCIntro} from './components/YGCIntro'
import "./YourGirlCodes.css";

export default class YourGirlCodes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {width, scrollDir} = this.props
      const breakpoint = 900;
const screenType = (width >= breakpoint) ? "big" : "small"
    return (
      <div >
          <div>
          {/* <YGCLeftContainer scrollDir={scrollDir} mustAnimate={(width >= breakpoint) && 'animate'} screenType={screenType}/>
          <YGCRightContainer screenType={screenType}/> */}
          <YGCIntro />
          <MediumCarousel />
        </div>
      </div>
    );
  }
}
