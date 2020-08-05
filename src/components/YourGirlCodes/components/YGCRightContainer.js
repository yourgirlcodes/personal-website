import React, { useEffect, useState } from "react";
import "../YourGirlCodes.css";
// import getMediumPosts from "../../../api/getMediumPosts";

function YGCRightContainer({ width }) {

  const [mediumPosts, setMediumPosts] = useState([])
  const [mediumTitle, setMediumTitle] = useState('')

  const getMediumPosts = () => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zoecohen01"
    )
      .then(res => res.json())
      .then(data => {
        const relevantParts = data.items.filter(item => item.categories.length > 0)
        console.log(relevantParts);
        setMediumPosts(relevantParts)
        setMediumTitle(relevantParts.title)
        return data;
      });
  };

  const changeToText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
 }

 const shortenText = (text,startingPoint,maxLength) => {
  return text.length > maxLength?
     text.slice(startingPoint, maxLength):text
 }
    
  useEffect(() => {
    getMediumPosts();
  }, []);

  return (
    <div className="right-container">
    {/* <a href={mediumTitle.url}>{mediumTitle.title}</a> */}
      {" "}
      {mediumPosts.length > 1 &&
      <div className="medium-stuff">
        { mediumPosts.map(post => {return(
          <div>
          <a href={post.link}>
          {/* {shortenText(changeToText(post.title), 40, (post.title.length - 4))} */}
          </a>
          <img src={post.thumbnail} className="mediumThumb"/>
          <p className="">{shortenText(changeToText(post.description),39, 190)+ '...'}</p>
          {/* </a> */}
          </div>
        )})}
      </div>
      }
    </div>
  );
}

export default YGCRightContainer;
