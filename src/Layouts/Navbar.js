import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";
import SelectButtons from "../Components/SelectButtons";
import { ReactComponent as Icon_hamburger } from "../Assets/icon-hamburger.svg";
import { ReactComponent as Icon_close } from "../Assets/icon-close.svg";
import { StateContext } from "../StateContext";
import { makeStyles } from "@material-ui/core/styles";

const Links = ["home", "shop", "about", "contact"];

const useStyles = makeStyles((theme) => ({
  cbutton: {
    textTransform: "none",
    "&:hover": {
      "& $borderBottom": {
        opacity: 1
      }
    }
  },
  borderBottom: {
    height: 3,
    width: 20,
    opacity: 0,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  },
  buttonWhite: {
    color: theme.palette.common.white
  },
  cwhite: {
    backgroundColor: theme.palette.common.white
  },
  cblack: {
    backgroundColor: theme.palette.common.black
  }
}));

const Navbar = ({ width }) => {
  const { state } = React.useContext(StateContext);
  const [open, setOpen] = React.useState(false);
  const c = useStyles();

  return (
    <React.Fragment>
      <Box height="100%" position="relative">
        <Box
          width="100%"
          color="text.secondary"
          style={{ position: "absolute" }}
          p={5}
          bgcolor="none"
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={3} sm={4}>
              <Box
                display="flex"
                justifyContent="space-between"
                textAlign="right"
              >
                <Hidden smUp>
                  <IconButton arial-label="menu" onClick={() => setOpen(true)}>
                    <SvgIcon component={Icon_hamburger} viewBox="0 0 20 15" />
                  </IconButton>
                </Hidden>
                <Typography variant="h4">
                  <b>room</b>
                </Typography>
                <div />
              </Box>
            </Grid>
            <Hidden only="xs">
              {Links.map((label, i) => (
                <Grid item md={2} sm={2} key={i}>
                  <Button
                    color="secondary"
                    className={`${c.cbutton} ${c.buttonWhite}`}
                  >
                    <span>
                      <b>{label}</b>
                    </span>
                    <span className={`${c.borderBottom} ${c.cwhite}`} />
                  </Button>
                </Grid>
              ))}
            </Hidden>
          </Grid>
        </Box>
        <Hidden mdUp>
          <SelectButtons bottom={0} right={0} />
        </Hidden>

        <img
          src={`./Assets/${
            width === "sm" || width === "xs" ? "mobile" : "desktop"
          }-image-${state.photo}.jpg`}
          alt={state.title}
          width="100%"
          height="auto"
          style={{
            display: "block"
          }}
        />
      </Box>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box width="100%" py={5.5} px={4}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <IconButton arial-label="menu" onClick={() => setOpen(false)}>
                <SvgIcon
                  color="secondary"
                  component={Icon_close}
                  viewBox="0 0 20 15"
                />
              </IconButton>
            </Grid>
            {Links.map((label, i) => (
              <Grid item xs={2} key={i}>
                <Button className={c.cbutton}>
                  <span>
                    <b>{label}</b>
                  </span>
                  <span className={`${c.borderBottom} ${c.cblack}`} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};
export default withWidth()(Navbar);
