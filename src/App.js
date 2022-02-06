import { ThemeProvider } from "styled-components";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Tracktistics from "./pages/Tracktistics";
import Home from "./pages/Home";
import Writing from "./pages/Writing";

//palette: https://coolors.co/fe5f55-82a7a6-351e29-ffefeb-033a37

const lightTheme =  {
  fontColor: '#033A37',
  body: '#FFEFEB', //'#F1E9DB'// 
  secondBody: '#',
  accent: '#82A7A6'
};

const darkTheme =  {
  fontColor: '#F8F6F1',
  body:'#033A37', //#272932
  secondBody: '#',
  accent: '#F05365'
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
    <ThemeProvider theme={themes[theme]}>
      <HelmetProvider>
        <Helmet>
          <html lang="en" />
          <title>Ahmed Hagar | Developer & Designer</title>
        </Helmet>
        <Routes>
            <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>} />
            <Route path='/tracktistics' element={<Tracktistics theme={theme} setTheme={setTheme} />} />
            <Route path='/writing' element={<Writing theme={theme} setTheme={setTheme} />} />
        </Routes>
      </HelmetProvider>
    </ThemeProvider>
    </Router>
  );
}

export default App;
