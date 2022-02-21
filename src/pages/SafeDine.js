import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import Footer from "../components/Footer";
import { Helmet} from 'react-helmet-async';
import SafeDineTitle from "../img/Case Study Banner.png";
import UberEats from "../img/ubereats.png";
import SafeDinePrototypes from "../img/safedine-prototypes.png";
import SafeDineProblem from '../components/case-studies/SafeDineProblem';
import SafeDineSolution from '../components/case-studies/SafeDineSolution';
import SafeDineResearch from '../components/case-studies/SafeDineResearch';
import SafeDineNextSteps from '../components/case-studies/SafeDineNextSteps';

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
            img={SafeDineTitle}
            title={`Case Study: SafeDine`} 
            subTitle1={`A restaurant search app that allows users to find nearby restaurants`}
            subTitle2={`UX Design + UX Research`}
        />
        <SafeDineProblem
          theme={props.theme}
          img={UberEats}
        />
        <SafeDineSolution
          theme={props.theme}
          img={SafeDinePrototypes}
        />
        <SafeDineResearch
          theme={props.theme}
          img={UberEats}
        />
        <SafeDineNextSteps 
          theme={props.theme} 
        />
        <Footer theme={props.theme} />
    </div>
  ) 
};

export default SafeDine;