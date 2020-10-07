import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon_arrow } from "../Assets/icon-arrow.svg";
import SelectButtons from "../Components/SelectButtons";
import { StateContext } from "../StateContext";

const MyButton = styled(Button)({
  letterSpacing: 10,
  "&:hover": {
    background: "none",

    color: "hsl(0, 0%, 63%)"
  }
});

export default () => {
  const { state } = React.useContext(StateContext);
  const { title, description } = state;

  return (
    <Box
      height="100%"
      alignItems="center"
      justifyContent="center"
      display="flex"
      position="relative"
    >
      <Box width="75%" p={3}>
        <Typography variant="h4" gutterBottom>
          <b>{title}</b>
        </Typography>
        <Typography variant="subtitle2" color="secondary" gutterBottom>
          {description}
        </Typography>

        <MyButton
          size="small"
          className="wtf-material-ui"
          endIcon={
            <SvgIcon
              component={Icon_arrow}
              style={{ fontSize: 50 }}
              // fontSize="large"
              viewBox="0 0 50 15"
            />
          }
        >
          shop now
        </MyButton>
      </Box>
      <Hidden mdDown>
        <SelectButtons bottom={0} left={0} />
      </Hidden>
    </Box>
  );
};
