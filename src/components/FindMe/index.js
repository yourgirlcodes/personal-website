import React, { Component } from "react";
import { Bar } from "../Projects/components/Bar";
import { ContactForm } from "./components/ContactForm";
import { SocialMedia } from "./components/SocialMedia";

import "./FindMe.css";

export default class FindMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="findMe">
          <div className="contact-form">
            Let's chat - you could probably teach me something.
            <ContactForm />
          </div>
          <div className="socialMedia">
            <SocialMedia />
          </div>
        </div>
        <Bar position={"bottom"} />
      </div>
    );
  }
}

// import FollowAt from "react-social-media-follow";

// const App = () => {
//   return (
//     <FollowAt links = {links}/>
//   );
// }
