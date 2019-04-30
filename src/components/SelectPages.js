import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ScrollToBottom from "react-scroll-to-bottom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function SelectPages(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        color="inherit"
        href="/sections/SkillSection"
        onClick={() => console.log("hi")}
      >
        Skills
        <ScrollToBottom />
      </Button>

      <Button color="inherit" onClick={() => console.log("hi")}>
        About
      </Button>
    </div>
  );
}

SelectPages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectPages);
