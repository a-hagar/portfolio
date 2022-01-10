import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GithubLogo } from "../img/github.svg"

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.fontColor};
    transition: all 0.5s ease;

    @media (max-width: 768px) {
        height: 1100px;
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

const SubTitle = styled.p`
    font-size: 25px;

    a{
        color: inherit;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }


    @media(max-width: 768px){
        width: 100%;
        font-size: 0.5em;

        a{
            text-decoration: underline;
        }
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
                    <Title>Past Projects
                        <SubTitle>Some projects that I worked on. Find more of my work on <a href='https://www.linkedin.com/in/ahmhagar/' target="_blank" rel="noopener noreferrer">Github</a></SubTitle>
                    </Title>
                    
                    <GridContainer>
                        <GridItem>
                        <h2>Tracktistics
                            <a href='https://github.com/a-hagar/tracktistics' target="_blank" rel="noopener noreferrer" id='logo'><GithubLogo /></a>
                        </h2>
                            <p>A full-stack app that allows Spotify users to visualize their music tastes, from top artists, songs and genres</p>
                            <div className='techList'>
                                <span id='text'>Built with: </span>
                                    <TechTab>React</TechTab>
                                    <TechTab>Node.js</TechTab>
                                    <TechTab>D3.js</TechTab>
                                    <TechTab>Styled Components</TechTab>
                            </div>
                        </GridItem>
                        <GridItem>
                        <h2>SafeDine
                            <a href='https://github.com/a-hagar/safedine' target="_blank" rel="noopener noreferrer" id='logo'><GithubLogo /></a>
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
                                <a href='https://github.com/a-hagar/notes' target="_blank" rel="noopener noreferrer" id='logo'><GithubLogo /></a>
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
