import "./App.css";

import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./components/pages/Home";


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
    <Home></Home>

    </ThemeProvider>

  );
}

export default App;
