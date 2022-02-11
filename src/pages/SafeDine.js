import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import Footer from "../components/Footer";
import { Helmet} from 'react-helmet-async';

const SafeDine = (props) => {
  return(  
    <div>
        <Helmet>
          <html lang="en" />
          <title>SafeDine | Ahmed Hagar</title>
        </Helmet>
        <Navbar 
            theme={props.theme} 
            setTheme={props.setTheme}
        />
        <CaseStudyHero 
            theme={props.theme} 
            //img={ }
            title={`Case Study: SafeDine`} 
            subTitle1={`A restaurant search app that allows users to find nearby restaurants`}
            subTitle2={`UX Design + Research, Full-Stack Development`}
        />
        <Footer theme={props.theme} />
    </div>
  ) 
};

export default SafeDine;