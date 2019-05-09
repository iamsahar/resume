import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import data from "../data.json";
import Button from "@material-ui/core/Button";
import {Link,animateScroll as scroll,} from "react-scroll";
import EditIcon from "@material-ui/icons/Edit";
import "../App.js";

const styles = {
  root: {
    flexGrow: 1,
    color: "white"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePageChange = () => {
    this.setState({ open: data.link });
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  changeColor() {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "yellow" ? "green" : "green" ? "red" : "red" ? "white" : "white",
      backgroundColor: this.state.backgroundColor === "#1e0f70" ? "white" : "white" ? "pink" : "pink" ? "blue" : "blue" ? "#1e0f70" : "#1e0f70"
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="inherit"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              style={{
                color: this.state.color,
                backgroundColor: this.state.backgroundColor
              }}
              onClick={this.changeColor}
              onClickCapture={() => {
                this.changeColor();
              }}
            >
            <EditIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            <Button color="inherit" onClick={() => console.log("hi")}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                delay={0}
              >
                About
              </Link>
            </Button>
            <Button color="inherit" onClick={() => console.log("hi")}>
              <a onClick={this.scrollToBottom}>Skills</a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);