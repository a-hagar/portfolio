import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GithubLogo } from "../img/github.svg"

const Bg = styled.div`
    width: 100%;
    min-height: 800px;
    background-color: ${props => props.theme.fontColor};
    transition: all 0.5s ease;

    @media (max-width: 800px) {
        height: 1100px;
        padding-bottom: 50px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 800px;
    }

    @media(max-width: 600px){
        height: 1900px;
    }
`;

const WorksDiv = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media(max-width: 768px){
        height: 700px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 100%;
    }
`;

const Title = styled.h1`
    margin: 100px 0px 0px 0px;
    font-size: 50px;
    color: ${props => props.theme.body};
    height: 50px;

    @media(max-width: 768px){
        font-size: 2.3em;
        text-align: center;
        width: 100%;
    }

    @media(max-width: 600px){
        margin-top: 70px;
    }
`;

const GridContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto;
    height: 500px;
    width: 100%;
    gap: 20px;
    grid-template-columns: repeat( auto-fit, minmax(0, 1fr) );
    word-break:break-all;
    margin-top: 50px;
    padding: 50px 0px;

    @media(max-width: 768px){
        margin-top 90px;
        height: 800px;
        grid-template-columns: repeat( auto-fit, minmax(40%, 1fr) );
    }

    @media (orientation:landscape) and (max-width: 800px){
        margin-top 120px;
    }

    @media(max-width: 600px){
        height: 800px;
        grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) );
    }
`;

const GridItem = styled.div`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
    padding: 20px;
    border-radius: 50px;
    position: relative;

    p{
        display: inline-block;
        word-break: break-word;
    }

    #case-study-link{
        color: ${props => props.theme.fontColor};
        font-weight: 700;
    }

    h2{
        font-size: 25px;
    }

    #logo{
        float: right;
    }

    svg {
        width: 30px;
        fill: ${props => props.theme.fontColor};
    }

    .techList{
        line-height: 30px;
        position: absolute;
        bottom: 0;
        margin: 20px 20px 20px 0px;
        text-align: right;
    }

    #text{
        float: left;
        margin-top: 5px;
    }

    @media(max-width: 600px){
        margin: auto;
        width: 80%;
        height: 450px;
    }
`;

const TechTab = styled.a`
    display: inline-block;
    background-color: ${props => props.theme.fontColor};
    color: ${props => props.theme.body};
    padding: 5px 20px;
    margin: 5px;
    margin-right: auto;
    border-radius: 50px;
    font-weight: 700;
    white-space: normal;
    width: fit-content;

`;

const Works = () => {
    return (
        <Bg>
            <div id='works'>
                <WorksDiv>
                    <Title>Project Experience
                    </Title>
                    
                    <GridContainer>
                        <GridItem>
                        <a id='case-study-link' href='/tracktistics'><h2>Tracktistics</h2></a>
                            <p>A web app that allows Spotify users to view their recent and lifetime music-listening history. Users can also discover their favourite artists and songs before the Wrapped campaign.</p>

                            <a id='case-study-link' href='/tracktistics'>View Case Study</a>
                            <div className='techList'>
                                <span id='text'>Built with: </span>
                                    <TechTab>UX Design</TechTab>
                                    <TechTab>Figma</TechTab>
                                    <TechTab id="last">User Research</TechTab>
                            </div>
                        </GridItem>
                        <GridItem>
                        <h2>SafeDine
                            <a href='https://github.com/a-hagar/safedine' target="_blank" rel="noopener noreferrer" id='logo'><GithubLogo id='SafeDine-Github' alt="View the code at Github"/></a>
                        </h2>
                        <p>A single-page application that allows users to find nearby restaurants in their locations using the Yelp & Google Maps APIs</p>
                        <div className='techList'>
                            <span id='text'>Built with: </span>
                                <TechTab>React</TechTab>
                                <TechTab>Next.js</TechTab>
                                <TechTab>Tailwind CSS</TechTab>
                        </div>
                        </GridItem>
                        <GridItem>
                            <h2>Notes+
                                <a href='https://github.com/a-hagar/notes' target="_blank" rel="noopener noreferrer" id='logo'><GithubLogo id='Notes-Github' alt="View the code at Github"/></a>
                            </h2>
                            <p>A note-taking app that lists your notes in chronological order. Write, edit, and delete notes of any size.</p>
                            <div className='techList'>
                            <span id='text'>Built with: </span>
                                <TechTab>HTML</TechTab>
                                <TechTab>CSS</TechTab>
                                <TechTab>Javascript</TechTab>
                                <TechTab>JQuery</TechTab>
                        </div>
                        </GridItem>
                    </GridContainer>
                </WorksDiv>
            </div>
        </Bg>
    )
}

export default Works
