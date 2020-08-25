import React from 'react'

import "../FindMe.css"

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

export const SocialMedia = () => {

    return (
        <>
        <div className="follow">
        or you can just follow me:
        <div className="buttons">
        <a href="https://www.facebook.com/zoe.cohen.351">
          <FacebookIcon round size={"30"} />
        </a>
        <a href="https://www.linkedin.com/in/zo%C3%ABcohen/">
          <LinkedinIcon round size={"30"} />
        </a>
        <a href="https://www.instagram.com/zoecohen/">
          <img id="instagram" src={require("../../../assets/png/instagram.png")} />
        </a>
        </div>
      </div>

      <div className="share">

        or share me here:
        <div className="buttons">
        <FacebookShareButton
          url={url}
          quote="YourGirlCodes"
          hashtag="YourGirlCodes"
        >
          <FacebookIcon round size={"30"} />
        </FacebookShareButton>
        <EmailShareButton url={url}>
          <EmailIcon round size={"30"} />
        </EmailShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={"30"} />
        </LinkedinShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon round size={"30"} />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round size={"30"} />
        </WhatsappShareButton>
      </div>
      </div>
      </>

    )
}