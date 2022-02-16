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

function HomeNavbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          COPOLA
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
            <Link to="/notification" className={classes.link}>
              Notification
            </Link>
            <Link to="/message" className={classes.link}>
              Message
            </Link>
            <Link to="/help" className={classes.link}>
              Help
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default HomeNavbar;
