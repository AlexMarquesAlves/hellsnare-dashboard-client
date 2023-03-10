import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";


function App() {
  const mode =useSelector((state)=>state.global.mode;
  const theme =useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>
    </div>
  )
}

export default App
