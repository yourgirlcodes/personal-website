import React, { Component } from "react";
import { Bar } from "../Projects/components/Bar";
import { ContactForm } from "./components/ContactForm";

import "./FindMe.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

const url = "https://www.yourgirlcodes.com";

export default class FindMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="findMe">
          <div className="follow">
            Follow me:
            <a href="https://www.facebook.com/zoe.cohen.351">
              <FacebookIcon round size={"64px"} />
            </a>
            <a href="https://www.linkedin.com/in/zo%C3%ABcohen/">
              <LinkedinIcon round size={"64px"} />
            </a>
            <a href="https://www.instagram.com/zoecohen/">
              <img src={require("../../assets/png/instagram.png")} />
            </a>
          </div>

          <div className="share">
            Share me here:
            <FacebookShareButton
              url={url}
              quote="YourGirlCodes"
              hashtag="YourGirlCodes"
            >
              <FacebookIcon round size={"64px"} />
            </FacebookShareButton>
            <EmailShareButton url={url}>
              <EmailIcon round size={"64px"} />
            </EmailShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon round size={"64px"} />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon round size={"64px"} />
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
              <WhatsappIcon round size={"64px"} />
            </WhatsappShareButton>
          </div>
          <div className="contact-form">
            Or, lets chat - you could probably teach me something.
            <ContactForm />
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
