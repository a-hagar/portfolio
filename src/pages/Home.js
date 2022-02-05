import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Works from "../components/Works";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = (props) => {
  return <div>
        <Navbar 
          theme={props.theme} 
          setTheme={props.setTheme}
          navLinkTitle1 ={'Works'}
          navLinkHref1 ={'#works'}
          navLinkTitle2 ={'About'}
          navLinkHref2 ={'#about'}
          navLinkTitle3 ={'Contact'}
          navLinkHref3 ={'#contact'}
        />
        <Hero theme={props.theme}/>
        <Works theme={props.theme}/>
        <About theme={props.theme}/>
        <Contact theme={props.theme}/>
        <Footer theme={props.theme}/>
  </div>;
};

export default Home;
