import React, { useState, useMemo } from "react";
import "./styles.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Navbar from "./Layouts/Navbar";
import Description from "./Layouts/Description";
import About from "./Layouts/About";
import { StateContext } from "./StateContext";

import Image_abaout_dark from "./Assets/image-about-dark.jpg";
import Image_abaout_light from "./Assets/image-about-light.jpg";

const theme = createMuiTheme({
  typography: {
    fontFamily: ` 'Spartan', sans-serif`
  },
  palette: {
    primary: {
      main: `#000`,
      light: "hsl(0, 0%, 27%)"
    },

    secondary: {
      main: "#cecece"
    },
    text: {
      secondary: "#fff"
    }
  }
});
// palette: {
//   primary: {
//     main: `hsl(300, 43%, 22%)`,
//     light: "hsl(300, 24%, 96%)"
//   },
//   text: {
//     primary: "hsl(0, 0%, 100%)",
//     secondary: "hsl(333, 80%, 67%)"
//   },
//   secondary: {
//     main: "hsl(303, 10%, 53%)"
//   }
// },
const DefaultState = {
  photo: "hero-1",
  title: "Discover innovative ways to decorate",
  description: ` We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`
};

export default function App() {
  const [state, setState] = useState(DefaultState);
  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <StateContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box flexGrow={1} width="100%" minHeight="auto" height="100vh">
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box height="100%">
                <Navbar />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box height="100%" width="100%">
                <Description />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box height="100%">
                <img
                  src={Image_abaout_dark}
                  alt="abaout-dark"
                  width="100%"
                  height="auto"
                  style={{
                    display: "block"
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box height="100%">
                <About />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box height="100%">
                <img
                  src={Image_abaout_light}
                  alt="abaout-light"
                  width="100%"
                  height="100%"
                  style={{
                    display: "block"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </StateContext.Provider>
  );
}
