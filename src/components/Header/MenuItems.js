import React, { useState } from "react";
import "../App.css";
import "./Header.css";
import curji from "curji";
const emojis = require("emojis-list");

function MenuItems({ screenType }) {

  const getCursorCurji = (num, id) => {
    console.log(num, id)
    return curji(`${emojis[num]}`, {
      selector: `.header-menu > #${id}`
    });
  };

  return (
    <div className="header-menu">
      {" "}
      {screenType.map((item, i) => {
        return (
          <div
            onMouseOver={() =>
              getCursorCurji(Math.floor(Math.random(670, 739)*(739 - 670 + 1)) + 670, item.component)
            }
            key={`${i}-${item.component}`}
            className={`header-button animated delay-${i}`}
            id={item.component}
          >
            {item.tag}{" "}
          </div>
        );
      })}{" "}
    </div>
  );
}

export default MenuItems;
