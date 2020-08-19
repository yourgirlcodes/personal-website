import React from "react";
import "../App.css";
import "./Header.css";
import MenuItems from './MenuItems'

const bigMenu = [
    { tag: "I am Zoë", component: "Landing", route:"/" },
    { tag: "alias YourGirlCodes", component: "YourGirlCodes", route: "/yourgirlcodes" },
    { tag: "get to know me", component: "MyStory", route: "/me" },
    { tag: "see my web dev stuff", component: "Projects", route: "/dev" },
    { tag: "or find me", component: "Footer", route:"/findme" }
    
  ];

  const smallMenu = [
    { tag: "meet", component: "MyStory" },
    { tag: "see", component: "Projects" },
    { tag: "find", component: "Footer" },
    { tag: "me", component: "Landing" },
  ]

function Header({ selectedNav, width }) {
  const breakpoint = 810;

  return (
    <div className="container-header">
    <MenuItems screenType={(width >= breakpoint) ? bigMenu : smallMenu} />
    </div>
  );
}

export default Header;
