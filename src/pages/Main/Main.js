import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";
import Certificates from "../../components/Certificates/Certificates";
import Hobbie from "../../components/Hobbie/Hobbie";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Certificates />
      {/* <Testimonials /> */}
      <Blog />
      <Hobbie/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
