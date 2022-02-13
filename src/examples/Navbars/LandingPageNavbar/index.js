import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    backgroundColor: "none"
  },
 logo: {
    flexGrow: "1",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(3),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function LandingPageNavbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          COPOLA
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default LandingPageNavbar;
