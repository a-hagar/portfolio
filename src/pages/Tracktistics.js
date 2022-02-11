import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudyHero from '../components/case-studies/CaseStudyHero';
import Footer from "../components/Footer";
import TrackHomeLight from "../img/Frame 1.png";
import Wrapped from "../img/wrapped.png";
import TrackSolution from "../img/Home Results.png";
import { Helmet} from 'react-helmet-async';
import Problem from '../components/case-studies/Problem';
import Solution from '../components/case-studies/Solution';
import TrackUserResearch from '../components/case-studies/TrackUserResearch';

const Tracktistics = (props) => {
  return(  
    <div>
        <Helmet>
          <html lang="en" />
          <title>Tracktistics | Ahmed Hagar</title>
        </Helmet>
        <Navbar 
            theme={props.theme} 
            setTheme={props.setTheme}
        />
        <CaseStudyHero 
            theme={props.theme} 
            img={TrackHomeLight}
            alt={`The banner image of my Tracktistics project`}
            title={`Case Study: Tracktistics`} 
            subTitle1={`A music-tracking app that visualizes a user's listening history`}
            subTitle2={`UX Design + Research`}
        />
        <Problem 
          theme={props.theme} 
          img={Wrapped}
        />
        <Solution
          theme={props.theme} 
          img={TrackSolution}
        />
        <TrackUserResearch
          theme={props.theme} 
          img={TrackSolution}
        />
        <Footer theme={props.theme} />
    </div>
  ) 
};

export default Tracktistics;
