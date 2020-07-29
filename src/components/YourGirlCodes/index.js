import React, { Component } from "react";
import YGCRightContainer from './components/YGCRightContainer';
import YGCLeftContainer from './components/YGCLeftContainer';

import "./YourGirlCodes.css";

export default class YourGirlCodes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {width, scrollDir} = this.props
      const breakpoint = 900;

    return (
      <div className="your-girl-codes">
          <div className={(width >= breakpoint) ? "YGC big" : "YGC small"}>
          <YGCLeftContainer scrollDir={scrollDir} mustAnimate={(width >= breakpoint) && 'animate'} />
          <YGCRightContainer />
        </div>
      </div>
    );
  }
}
