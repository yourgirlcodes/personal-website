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
        console.log(data);
        setMediumPosts(data.items)
        setMediumTitle(data.feed)
        return data;
      });
  };

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
          {/* {post.title}
          </a> */}
          <img src={post.thumbnail} className="mediumThumb"/>
          </a>
          </div>
        )})}
      </div>
      }
    </div>
  );
}

export default YGCRightContainer;
