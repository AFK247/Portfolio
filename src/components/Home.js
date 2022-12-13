import React from "react";
import About from "./About";
import Contact from "./Contact";
import Mywork from "./Mywork";
import Skills from "./Skills";
import Socials from "./Socials";

const Home = () => {
  return (
    <div>
      <About></About>
      <Mywork></Mywork>
      <Skills></Skills>
      <Socials></Socials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
