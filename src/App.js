import AppRoute from "./router/index";
import { ThemeProvider } from "@mui/material";
import {theme} from "./utils/theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
