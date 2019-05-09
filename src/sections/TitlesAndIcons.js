import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesAndIcons extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      backgroundColor: "#1e0f70",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "yellow" ? "green" : "green" ? "red" : "red" ? "white" : "white",
      backgroundColor: this.state.backgroundColor === "#1e0f70" ? "white" : "white" ? "pink" : "pink" ? "blue" : "blue" ? "#1e0f70" : "#1e0f70"
    });
  }

  render() {
    return (
      <div style={{
        color: this.state.color,
        backgroundColor: this.state.backgroundColor
      }}>
        <Fullpage className="first">
          <h1
            className="title"
            style={{
              color: this.state.color,
              backgroundColor: this.state.backgroundColor
            }}
            onClick={this.changeColor}
            onClickCapture={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                  <SocialIcon url={data.links[key]} />
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={300}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("im working")}
          />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitlesAndIcons;
