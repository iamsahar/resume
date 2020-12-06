import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map((p) => {return <p>{p.content}</p>;})}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={300}
          delay={0}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="skills" className="element" />
      </div>
    );
  }
}

export default AboutSection;
