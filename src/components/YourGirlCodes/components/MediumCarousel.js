import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "../YourGirlCodes.css";

export const MediumCarousel = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [mediumTitle, setMediumTitle] = useState("");

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
        setMediumTitle(relevantParts.title);
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
  const shortenText = (text, maxLength, link) => {
    const startingIndex = text.indexOf("YourGirlCodes") + 13;

    const firstText =
      text.length > maxLength ? text.slice(startingIndex, maxLength) : text;

    const secondText = text.length > maxLength ? text.slice(maxLength) : text;

    return firstText + " " + link+ '' + secondText
  };

  useEffect(() => {
    getMediumPosts();
  }, []);

  return (
    <AwesomeSlider>
      {mediumPosts.length > 1 &&
        mediumPosts.map((post, i) => {
          return (
            <Container
              fluid
              key={`${i}-${post.link}`}
              className="medium-article"
            >
              <div xs="6" className="right-content">
                {shortenText(changeToText(post.description), 1500, changeToLink(post.title, post.link))}
              </div>
            </Container>
          );
        })}
    </AwesomeSlider>
  );
};