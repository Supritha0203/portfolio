import React, { useContext } from "react";

import "./Certificates.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { certificatesData } from "../../data/certificates.js";
import CertificateCard from "./CertificateCard";

function Certificates() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {certificatesData.certificates.length > 0 && (
        <div
          className="certificate"
          id="certificate"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="certificate-body">
            <h1 style={{ color: theme.primary }}>Certificates</h1>
            <h4 style={{ color: theme.tertiary }}>{certificatesData.bio}</h4>
          </div>
          <div className="certificate-cards">
            {certificatesData.certificates.map((certificate) => (
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
      )}
    </>
  );
}

export default Certificates;
