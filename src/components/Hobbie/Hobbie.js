import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Hobbie.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { hobbieData } from "../../data/hobbieData";
import SingleHobbie from "./SingleHobbie/SingleHobbie";

function Hobbie() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {hobbieData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Hobbies</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {hobbieData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleHobbie
                    theme={theme}
                    title={blog.title}
                    desc={blog.description}
                    image={blog.image}
                    key={blog.id}
                    id={blog.id}
                  />
                ))}
            </div>

            {hobbieData.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Hobbie;
