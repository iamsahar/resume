import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import NavBar from "./sections/NavBar";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm />
        <NavBar background-color= "#1e0f70" />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
