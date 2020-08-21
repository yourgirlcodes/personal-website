import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "../YourGirlCodes.css";

export const MediumCarousel = () => {
  const [mediumPosts, setMediumPosts] = useState([]);

  const getMediumPosts = () => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zoecohen01"
    )
      .then(res => res.json())
      .then(data => {
        const relevantParts = data.items.filter(
          item => item.categories.length > 0
        );
        console.log(relevantParts);
        setMediumPosts(relevantParts);
        return data;
      });
  };

  const changeToText = node => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  const changeToLink = (title, anchor) => {
    let tag = document.createElement("a");
    
    // tag = title.innerHTML;
    tag.href = anchor

    tag.innerText = title;

    // title = tag.innerText;

    return title;    
  }

  const getAnchor = (title, anchor) => {

  }
  // const shortenText = (text, maxLength, link) => {
  //   const startingIndex = text.indexOf("YourGirlCodes") + 13;

  //   const firstText =
  //     text.length > maxLength ? text.slice(startingIndex, maxLength) : text;

  //   const secondText = text.length > maxLength ? text.slice(maxLength) : text;

  //   return firstText + " " + link+ '' + secondText
  // };

  function shortenText(text,startingPoint ,maxLength) {
    return text.length > maxLength?
       text.slice(startingPoint, maxLength):
       text
   }

  useEffect(() => {
    getMediumPosts();
  }, []);

  const handleClick = (link) => {

  }
  return (
    <div className="carousel">
    <AwesomeSlider bullets={false}>
      {mediumPosts.length > 1 &&
        mediumPosts.map((post, i) => {
          return (
            <Container
              fluid
              key={`${i}-${post.link}`}
              className="medium-article"
            >
            
              <div xs="6" className="right-content">
              {shortenText(changeToText(post.description), 0, 150)}

              <a href={post.link} className="link">{changeToText(post.title)}</a> {""}
              {shortenText(changeToText(post.description), 150, 400)}
              </div>
            </Container>
          );
        })}
    </AwesomeSlider>
    </div>
  );
};