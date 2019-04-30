import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import ButtonAppBar from "./ButtonAppBar";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Fullpage className="first">
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
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
