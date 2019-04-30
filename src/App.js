import React, { Component } from "react";

import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import "./App.css";
import SnowStorm from "react-snowstorm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm />

        <div className="navigation" />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
