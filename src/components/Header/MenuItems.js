import React from "react";
import curji from "curji";
import {Link} from 'react-router-dom'

import "../App.css";
import "./Header.css";

const emojis = require("emojis-list");

function MenuItems({ screenType }) {

  const getCursorCurji = (num, id) => {
    return curji(`${emojis[num]}`, {
      selector: `.header-menu > #${id}`
    });
  };

  return (
    <div className="header-menu">
      {screenType.map((item, i) => {
        return (
          <div
          onClick={()=> window.location.href=(item.route)}
            onMouseOver={() =>
              getCursorCurji(Math.floor(Math.random(670, 739)*(739 - 670 + 1)) + 670, item.component)
            }
            key={`${i}-${item.component}`}
            className={`header-button animated delay-${i}`}
            id={item.component}
          >
            {item.tag}
            </div>
        );
      })}
      </div>
  );
}

export default MenuItems;
