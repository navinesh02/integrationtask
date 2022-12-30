import AppRoute from "./router/index";
import { ThemeProvider } from "@mui/material";
import {theme} from "./utils/theme";
// import { Context } from "react";
function App() {
  return (
    // <Context.Provider>

    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
    // </Context.Provider>

  );
}

export default App;
