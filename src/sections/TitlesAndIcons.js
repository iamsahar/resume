import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
import "./TitlesAndIcons.css";

class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1 className="title">
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map(key => {return (<SocialIcon url={data.links[key]} />);})}
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
          <DownIcon icon={data.icons.down}/>
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitlesAndIcons;
