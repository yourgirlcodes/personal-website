import React from "react";
import { MediumCarousel } from "./MediumCarousel";

export const YGCMiddle = () => {
  return (
    <div className="middle-container">
      <span className="sidebar-left">
        A <b>Bible-Writer</b>, with a highlight's reel on my Instagram page and
        named after my GitHub account. When I have days stuck with{" "}
        <b>imposter-syndrome</b>, YourGirlCodes keeps me going. And, truthfully,
        this is who <b>YourGirlCodes</b> is - the stronger me. As my alias, I
        don't ever really doubt her.
        YourGirlCodes shares all my secrets and advice received from
        <b>Genius-Humans </b>
        in <b> The Bible For The Aspiring Developer: </b><br />{" "}
        <MediumCarousel />
      </span>

      <span className="sidebar-right">
        <ul >
          <li>
            Bible: Just a collection of cool things I have learnt through
            <b> changing career paths</b>, meeting incredible people, and spending too
            much time analyzing humans.{" "}
          </li>
          <li>
            Genius-Humans: Anyone who can <b>teach me anything</b> regarding my
            journey.
          </li>
          <li>
            The Bible For The Aspiring Developer: YourGirlCodes' series of <b>Medium
            articles </b> that are slowly coming along(she gets writer's block and
            sometimes carried away with the hustle of life - she writes The
            Bible as she thinks of things about me that she wants to share.)
          </li>
        </ul>
      </span>

    </div>
  );
};
