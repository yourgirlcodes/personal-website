import React from "react";

import './Footer.css'
function Footer({ width }) {


  return (
    <div className="footer" style={{height: "2vw", color: "purple", paddingTop: "2%"}}>
    <span className="fiind">You can find me:
    <span style={{paddingTop: "3%"}}><a href="https://www.facebook.com/zoe.cohen.351">Facebook</a></span>
    <span style={{paddingTop: "3%"}}><a href="https://github.com/yourgirlcodes">Git Hub</a></span>
    <span style={{paddingTop: "3%"}}><a href="https://www.linkedin.com/in/zoëcohen/">LinkedIn</a></span> 
    </span></div>
  );
}

export default Footer;
