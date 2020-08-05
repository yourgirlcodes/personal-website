import React from "react";
import "../YourGirlCodes.css";

export const YGCIntro = ({ width, scrollDir, mustAnimate }) => {
  return (
    <>
    <div className={`heading ${mustAnimate}-${scrollDir}`}> ...alias YourGirlCodes </div>{" "}
      <div className="text-container">
        Born while looking for my very first job in Hi-Tech, in 2019. A{" "}
        <b>Bible-writer</b>, with a highlight's reel on my Instagram page named
        after my GitHub account. <b>YourGirlCodes</b> shares all my secrets and
        advice received from <b>Genius-Humans </b>
        in <b>The Bible For The Aspiring Developer.</b>{" "}
        <div className="dictionary">
          <b>Bible:</b> Just a collection of cool things I have learnt through
          changing career paths, meeting incredible people, and spending too
          much time analyzing humans.
          <b>Genius-Humans:</b> Anyone who can teach me anything regarding my
          journey. <b>The Bible For Aspiring Developer:</b> YourGirlCodes'
          series of Medium articles that are slowly coming along(she gets
          writer's block and sometimes carried away with the hustle of life -
          she writes The Bible as she thinks of things about me that she wants
          to share.){" "}
        </div>{" "}
        When I have days stuck with <b>imposter-syndrome</b>, YourGirlCodes
        keeps me going. And, truthfully, this is who she is - the stronger me.
        As my alias, I don't ever really doubt her.
      </div>
    </>
  );
};
