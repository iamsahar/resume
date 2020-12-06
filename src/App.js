import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import NavBar from "./components/NavBar";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SnowStorm />
        <NavBar />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
