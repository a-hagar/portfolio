import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from "react";

const lightTheme =  {
  fontColor: '#272932',
  body:'#F1E9DB'
};

const darkTheme =  {
  fontColor: '#F1E9DB',
  body:'#272932'
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={themes[theme]}>
      <HelmetProvider>
        <Helmet>
          <html lang="en" />
          <title>Ahmed Hagar — Full-Stack Developer & Designer</title>
        </Helmet>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero theme={theme}/>
        <Works theme={theme}/>
        <About theme={theme}/>
        <Contact theme={theme}/>
        <Footer theme={theme}/>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
