import { ThemeProvider } from "styled-components";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Tracktistics from "./pages/Tracktistics";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import SafeDine from "./pages/SafeDine";
import { createGlobalStyle } from 'styled-components';


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

  const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        background-color: ${props => props.theme.body};
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  
`;

  return (
    <Router>
        <ThemeProvider theme={themes[theme]}>
        <GlobalStyle theme={theme}/>
          <HelmetProvider>
            <Helmet>
              <html lang="en" />
              <title>Ahmed Hagar | Developer & Designer</title>
            </Helmet>
            <Routes>
                <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>} />
                <Route path='/tracktistics' element={<Tracktistics theme={theme} setTheme={setTheme} />} />
                <Route path='/writing' element={<Writing theme={theme} setTheme={setTheme} />} />
                <Route path='/safedine' element={<SafeDine theme={theme} setTheme={setTheme} />} />
            </Routes>
          </HelmetProvider>
        </ThemeProvider>
    </Router>
  );
}

export default App;
