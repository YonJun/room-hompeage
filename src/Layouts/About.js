import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
    overflow: "hidden"
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Box
      height="100%"
      alignItems="center"
      justifyContent="center"
      display="flex"
      position="relative"
    >
      {/* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden; */}
      <Box width="75%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b> About our furniture</b>
        </Typography>
        <Typography
          variant="subtitle2"
          color="secondary"
          className={classes.root}
          // className="line-clamp"
        >
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Typography>
      </Box>
    </Box>
  );
};
