import React from "react";
import {Words} from "../../assets/constants/Words.js";
import './MyStory.css'
function MyStory({ width }) {
  return (
    <div className="my-story">
        Let me introduce myself... <br />
        My name is Zoë and I am passionate <br />
        passionate about coding <br />
        passionate about living <br />
        passionate about learning <br />
        But, <br />
         there is more to me too..<br />
         <div className="first-stripe">

        {Words.map(word => {
          return <span> {word} <br /></span>;
        })}
      </div>
    </div>
  );
}

export default MyStory;
