import React from "react";
import "../App.css";
import "./Header.css";
import MenuItems from './MenuItems'

const bigMenu = [
    { tag: "I am Zoë", component: "Landing" },
    { tag: "alias YourGirlCodes", component: "YourGirlCodes" },
    { tag: "get to know me", component: "MyStory" },
    { tag: "see my web dev stuff", component: "Projects" },
    { tag: "or find me", component: "Footer" }
    
  ];

  const smallMenu = [
    { tag: "meet", component: "MyStory" },
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
