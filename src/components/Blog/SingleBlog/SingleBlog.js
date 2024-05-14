import React from "react";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleBlog.css";

 export default function SingleBlog({ theme, title, desc, date, image, url, id }) {
  return (
    <Fade bottom>
      <a href={url} target="_blank" rel="noreferrer">
      <div
        className="singleBlog"
        key={id}
        style={{ backgroundColor: theme.primary400 }}
      >
        <div
          className="singleBlog--image"
          style={{ backgroundColor: theme.secondary }}
        >
          <img src={image ? image : placeholder} alt={title} />
        </div>
        <div className="singleBlog--body">
          <h3 style={{ color: theme.secondary }}>{title}</h3>
          <h6 style={{ color: theme.secondary }}>{desc}</h6>
        </div>
      </div>
      </a>
    </Fade>
    );
  }// Add a closing parenthesis here