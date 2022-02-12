import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 81vh;
    min-height: 1050px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        height: 80vh;
        min-height: 850px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const SolutionDiv = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 0px auto 0px auto;

    @media(max-width: 768px){
        flex-direction: column-reverse;
        justify-content:center;
        padding-top: 0px;
        width: 100%;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 40px;
        height: 100%;
    }
`;

const SolutionText = styled.div`
    margin-top: 20px;
    width: 80%;
    color: ${props => props.theme.fontColor};

    h1{
        font-size: 25px;
    }

    p{
        font-size: 20px;
    }

    li{
        padding-bottom: 10px;
    }

    h3{
        margin: 200px auto;
        text-align: center;
        font-size: 30px;
    }

    @media(max-width: 768px){
        width: 80%;

    }

`;

const SolutionImg = styled.div`
    width: 100%;
    p{
        width: 80%;
        margin: 0px auto 10px;
        color: ${props => props.theme.fontColor};
        text-align: center;
    }

    @media(max-width: 768px){
        width: 97%;
        padding: 0px;
    }
`;

const SolutionPic = styled.img`
    width: 49%;
    margin: auto;
`;


const Solution = (props) => {
  return (
    <Bg>
        <SolutionDiv>
            <SolutionText>
                <h2>Solution</h2>
                <p>
                    Tracktistics (merging Tracks and Statistics) is a web-based solution that aims to give Spotify users access their listening data on any device. Connecting to the Spotify API, users can login and view their favourite songs and artists in some ranges (4 weeks, 6 months, and lifetime) at any time. 
                </p>
                <h3>Case Study Coming Soon!</h3>
            </SolutionText>
            <SolutionImg>
                <SolutionPic src={props.img2} alt="The Home Page of Tracktistics"/>
                <SolutionPic src={props.img} alt="The Home Dashboard of Tracktistics, showing user listening data"/>
                <p>The Tracktistics Dashboard, displaying the user's recent results.</p>
            </SolutionImg>
        </SolutionDiv>
    </Bg>
    );
}

export default Solution;