import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Collections from "./Components/Collections";
import Footer from "./Components/Footer";
import UniqueStyle from "./Components/UniqueStyle";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> <Header mode={mode} toggleMode={toggleMode} /> <Hero />
      <Collections /> <UniqueStyle /> 
    </ThemeProvider>
  );
}

export default App;
