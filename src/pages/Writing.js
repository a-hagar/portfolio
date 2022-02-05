import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import Footer from "../components/Footer";

const Tracktistics = (props) => {
  return(  
    <div>
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        <CaseStudyHero 
            theme={props.theme}
            title={`Writing Experience`} 
            subTitle1={``}
            subTitle2={`5 years of published writing for various local publications and organizations in the Toronto Area`} 
        />
        <Footer theme={props.theme} />
    </div>
  ) 
};

export default Tracktistics;
