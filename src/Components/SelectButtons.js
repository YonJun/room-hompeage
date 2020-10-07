import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon_angle_left } from "../Assets/icon-angle-left.svg";
import { ReactComponent as Icon_angle_right } from "../Assets/icon-angle-right.svg";
import { StateContext } from "../StateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      cursor: "pointer"
    }
  }
}));

const Data = [
  {
    photo: "hero-1",
    title: "Discover innovative ways to decorate",
    description: ` We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
  },
  {
    photo: "hero-2",
    title: "We are available all across the globe",
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
  },
  {
    photo: "hero-3",
    title: "Manufactured with the best materials",
    description: ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
  }
];

export default (props) => {
  const [index, setIndex] = React.useState(0);
  const { setState } = React.useContext(StateContext);

  const btnIncrement = (val) => {
    let tempIndex = index;
    let result = tempIndex + val;
    if (result >= 0 && result < Data.length) {
      const selected = Data[result];
      console.log(result, val, selected);
      setState(selected);
      setIndex(result);
    }
  };

  const classes = useStyles();
  return (
    <Box
      position="absolute"
      {...props}
      bgcolor="black"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <ButtonBase>
        <Box
          className={classes.root}
          textAlign="center"
          px={3}
          py={2}
          onClick={() => btnIncrement(-1)}
        >
          <SvgIcon component={Icon_angle_left} style={{ fontSize: 20 }} />
        </Box>
      </ButtonBase>
      <ButtonBase>
        <Box
          className={classes.root}
          textAlign="center"
          px={3}
          py={2}
          onClick={() => btnIncrement(1)}
        >
          <SvgIcon component={Icon_angle_right} style={{ fontSize: 20 }} />
        </Box>
      </ButtonBase>
    </Box>
  );
};
