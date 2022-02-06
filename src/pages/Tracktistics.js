import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import Footer from "../components/Footer";
import TrackHomeLight from "../img/track-home-light.png";

const Tracktistics = (props) => {
  return(  
    <div>
        <Navbar 
            theme={props.theme} 
            setTheme={props.setTheme}
        />
        <CaseStudyHero 
            theme={props.theme} 
            img={TrackHomeLight}
            title={`Case Study: Tracktistics`} 
            subTitle1={`A music-tracking app that visualizes a user's listening history`}
            subTitle2={`UX Design + Research`}
        />
        <Footer theme={props.theme} />
    </div>
  ) 
};

export default Tracktistics;
