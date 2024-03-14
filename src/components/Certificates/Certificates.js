import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { makeStyles } from "@material-ui/core/styles";

import "./Certificates.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { certificatesData } from "../../data/certificatesData.js";
import CertificateCard from "./CertificateCard";

function Certificates() {
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
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
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));
  const classes = useStyles();

  return (
    <>
      {certificatesData.certificates.length > 0 && (
        <div
          className="certificate"
          id="certificate"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="certificate-parent-body">
            <div className="certificate-body">
              <h1 style={{ color: theme.primary }}>Certificates</h1>
              <h4 style={{ color: theme.tertiary }}>{certificatesData.bio}</h4>
            </div>
            <div className="certificate-cards">
              {certificatesData.certificates.slice(0, 3).map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  id={certificate.id}
                  title={certificate.title}
                  details={certificate.details}
                  date={certificate.date}
                  image={certificate.image}
                />
              ))}
            </div>
          </div>
          {certificatesData.certificates.length > 3 && (
            <div className="certificates--viewAll">
              <Link to="/certificates">
                <button className={classes.viewAllBtn}>
                  View All
                  <HiArrowRight className={classes.viewArr} />
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Certificates;
