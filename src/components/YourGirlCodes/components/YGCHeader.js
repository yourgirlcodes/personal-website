import React from "react";
import { MediumCarousel } from "./MediumCarousel";

export const YGCHeader = () => {
  return (
    <table>
      <tr>
        <td colSpan="1">alias YourGirlCodes</td>
        <td colSpan="5">
          is my alter-ego and Passion-Project that was born whilst looking for
          my very first job in Hi-Tech. This was in 2019.
        </td>
      </tr>
      <tr>
      <td colSpan="7">
        <b>YourGirlCodes</b> shares all my secrets and advice received from
      <b> Genius-Humans </b>
      in <b>The Bible For The Aspiring Developer.</b>{" "}
      </td>
      </tr>

      <tr>
      <td rowSpan="2" colSpan="1">      YourGirlCodes is my alter-ego and Passion-Project that was
      born whilst looking for my very first job in Hi-Tech. This was
      in 2019.
      A <b>Bible-Writer</b>, with a highlight's
      reel on my Instagram page and named after my GitHub account.{" "}
      When I have days stuck with <b>imposter-syndrome</b>, YourGirlCodes keeps
      me going. <br />And, truthfully, this is who <b>YourGirlCodes</b> is - the
      stronger me. As my alias, I don't ever really doubt her.
</td>
        <td  rowSpan="1" colSpan="4">
          <ul>
            <li>
              Bible: Just a collection of cool things I have learnt through
              changing career paths, meeting incredible people, and spending too
              much time analyzing humans.{" "}
            </li>
            <li>
              Genius-Humans: Anyone who can teach me anything regarding my
              journey.
            </li>
            <li>
              The Bible For Aspiring Developer:YourGirlCodes' series of Medium
              articles that are slowly coming along(she gets writer's block and
              sometimes carried away with the hustle of life - she writes The
              Bible as she thinks of things about me that she wants to share.)
            </li>
          </ul>
        </td>
      </tr>
      <tr>
      <MediumCarousel />

      </tr>

      {/* <span className="header">alias YourGirlCodes</span>
      <span className="intro">
        is my alter-ego and Passion-Project that was born whilst
        looking for my very first job in Hi-Tech. This was in 2019.
      </span> */}
    </table>
  );
};
