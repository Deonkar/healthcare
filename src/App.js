import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./themes/theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Healthcare Dashboard
          </Typography>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Toolbar>
      </AppBar>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
