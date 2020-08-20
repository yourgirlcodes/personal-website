import React from "react";
import "../App.css";
import "./Header.css";
import { MenuRoutes } from "../../assets/constants/MenuRoutes";
import curji from "curji";

const emojis = require("emojis-list");

function Header() {
  const getCursorCurji = (num, id) => {
    return curji(`${emojis[num]}`, {
      selector: `.header-menu > #${id}`
    });
  };

  const currentPage = window.location.pathname
  let animated = currentPage === "/" ? "animated" : "";

  return (
      <div className="header-menu">
        {MenuRoutes.map((item, i) => {
          return (
            <div
              onClick={() => (window.location.href = item.route)}
              onMouseOver={() =>
                getCursorCurji(
                  Math.floor(Math.random(670, 739) * (739 - 670 + 1)) + 670,
                  item.component
                )
              }
              key={`${i}-${item.component}`}
              className={`header-button ${animated} delay-${i}`}
              id={item.component}
            >
              {item.tag}
            </div>
          );
        })}
    </div>
  );
}

export default Header;
