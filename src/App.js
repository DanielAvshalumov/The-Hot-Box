import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import About from "./components/About";
import ScrollToTop from "./components/subcomponent/ScrollToTop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OurProduct from "./components/OurProduct";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#C1E1C1'
    },
    secondary: {
      main: '#2e7d32'
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourproduct" element={<OurProduct />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
        <br />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
