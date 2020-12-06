import React, { Component } from "react";
import "./Fullpage.css";


class Fullpage extends Component {
  state = {
    anchorEl: null,
  };
  render() {
    const { children } = this.props;
    return (
      <div className={`Fullpage ${this.props.className || ""}`}>
        {children}{" "}
      </div>
    );
  }
}

export default Fullpage;
