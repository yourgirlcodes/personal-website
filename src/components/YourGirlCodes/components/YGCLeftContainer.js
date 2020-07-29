import React from "react";
import '../YourGirlCodes.css'

function YGCLeftContainer({ width, scrollDir }) {


  return (
    <div className="left-container">
    <div className={`YGC-Title ${scrollDir}`}> ...alias Your Girl Codes </div>{" "}

    <div className="YGC-IntroText">
      Your Girl Codes is my alter - ego (& Passion-Project) that was
      born whilst looking for my very first job in Hi - Tech. This was
      in 2019.
      <b> YourGirlCodes</b> is a <b>Bible-writer</b>, has a highlight's
      reel on my Instagram account and is the name of my GitHub account.{" "}
      <div className="dictionary" id="bible">
        Bible? Just a collection of cool things I have learnt through
        changing career paths, meeting incredible people, and spending
        too much time analyzing humans.YourGirlCodes, over time, shares
        all my secrets and advice received from{" "}
        <span id="genius">
          {" "}
          <b>Genius-humans </b>
        </span>{" "}
        in{" "}
        <span className="aspiring-dev">
          <b>The Bible For The Aspiring Developer.</b>{" "}
        </span>{" "}
      </div>{" "}
      <div>
        Genius - humans ? Anyone who can teach me ANYTHING regarding my
        journey.{" "}
      </div>{" "}
      <div>
        The Bible of Aspiring WHAT? YourGirlCodes' series of Medium
        articles that are slowly coming along(she gets writer 's block
        and sometimes carried away with the hustle of life - she writes
        The Bible as she thinks of things about me that she wants to
        share.){" "}
      </div>{" "}
      When I have days stuck with imposter-syndrome, YourGirlCodes keeps
      me going. And, truthfully, This is who YourGirlCodes is - the
      stronger me - as my alias, I don't ever really doubt her.
    </div>{" "}
  </div>
);
}

export default YGCLeftContainer;
