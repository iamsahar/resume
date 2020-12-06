import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import Theme from "../components/Theme";
import "../App.js";
import "./NavBar.css";

const styles = {
  root: {
    flexGrow: 1,
    color: "white",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class NavBar extends React.Component {
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
            <Theme />
            <Typography variant="h6" color="inherit" className={classes.grow} />
            <Button color="inherit">
              <Link
                className='class-button'
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
            <Button color="inherit">
              <Link
                className='class-button'
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                delay={0}
              >
                Skills
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                className='class-button'
                activeClass="active"
                to="first"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                delay={0}
              >
                Resume
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
