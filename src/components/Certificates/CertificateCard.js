import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import { AiOutlineFolder } from "react-icons/ai";

import "./Certificates.css";

function CertificateCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    certificateCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <div key={id} className={`certificate-card ${classes.certificateCard}`}>
        <div className="certificatecard-content">
          <div className="certificatecard-details1">
            <h2 style={{ color: theme.tertiary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }} className="details">
              {details}
            </p>
          </div>
          <div
            className="certificatecard-details2"
            style={{ color: theme.primary }}
          >
            <h5>{date}</h5>
          </div>
        </div>
        <div className="certificatecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </div>
    </Fade>
  );
}

export default CertificateCard;
