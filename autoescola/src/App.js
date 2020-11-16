import "./App.css";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";

import Routes from "../src/routes/index"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
          <Routes />
      </Router>
    
    </ThemeProvider>
  );
}

export default App;
