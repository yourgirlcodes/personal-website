import React from "react";
import "../App.css";
import "./Header.css";
import MenuItems from './MenuItems'

const bigMenu = [
    { tag: "I am Zoë", route: "/", component: "Landing"},
    { tag: "alias YourGirlCodes", route: "/YGC", component: "YourGirlCodes" },
    { tag: "get to know me", route: "/Zoe", component: "MyStory" },
    { tag: "see my web dev stuff", route: "/Dev" },
    // { tag: "or find me", route: "" }
    
  ];
  //smallmenu is now hamburger that takes up whole screen on click

  const smallMenu = [
    { tag: "meet", route: "MyStory" },
    { tag: "see", component: "Projects" },
    { tag: "find", component: "Footer" },
    { tag: "me", component: "Landing" },
  ]

function Header({ selectedNav, width }) {
  const breakpoint = 850;

  return (
    <div className="container-header">
    <MenuItems screenType={(width >= breakpoint) ? bigMenu : smallMenu} />
    </div>
  );
}

export default Header;
