import React from "react";
import '../YourGirlCodes.css'

function YGCLeftContainer({ width, scrollDir, mustAnimate }) {


  return (
    <div className="left-container">
    <div className={`YGC-Title ${mustAnimate}-${scrollDir}`}> ...alias YourGirlCodes </div>{" "}

    <div className="YGC-IntroText">
      <b>YourGirlCodes</b> is my alter-ego and Passion-Project that was
      born whilst looking for my very first job in Hi-Tech. This was
      in 2019.
      <b> YourGirlCodes</b> is a <b>Bible-writer</b>, has a highlight's
      reel on my Instagram page and is the name of my GitHub account.{" "}
      <div className="dictionary" id="bible">
        Bible: <br /> Just a collection of cool things I have learnt through
        changing career paths, meeting incredible people, and spending
        too much time analyzing humans. </div> 
        <b>YourGirlCodes</b> shares
        all my secrets and advice received from{" "}
        <span id="genius">
          {" "}
          <b>Genius-Humans </b>
        </span>{" "}
        in{" "}
        <span className="aspiring-dev">
          <b>The Bible For The Aspiring Developer.</b>{" "}
        </span>{" "}
      <div className="dictionary">
        Genius-Humans:<br /> Anyone who can teach me anything regarding my
        journey.{" "} <br /> <br />
        The Bible For Aspiring Developer: <br /> YourGirlCodes' series of Medium
        articles that are slowly coming along(she gets writer's block
        and sometimes carried away with the hustle of life - she writes
        The Bible as she thinks of things about me that she wants to
        share.){" "}
      </div>{" "}
      When I have days stuck with <b>imposter-syndrome</b>, YourGirlCodes keeps
      me going. <br />And, truthfully, this is who <b>YourGirlCodes</b> is - the
      stronger me. As my alias, I don't ever really doubt her.
    </div>
    </div>
);
}

export default YGCLeftContainer;
