import React from 'react'
import styled from 'styled-components'
import Profile from "../img/profile-2.jpg"

const Bg = styled.div`
    width: 100%;
    height: 810px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;

    @media(max-width: 500px){
        height: 750px;
    }

`;

const HeroDiv = styled.div`
    width: 80%;
    margin: auto;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 768px){
        padding-top: 70px;
        flex-direction: column;
    }
`;

const Title = styled.h1`
    margin-top: 40px;
    font-size: 50px;
    color: ${props => props.theme.fontColor};
    width: 45%;
    font-weight: 700;

    @media(max-width: 768px){
        font-size: 2.3em;
        text-align: center;
        width: 100%;
        margin: 30px auto;
    }
`;

const SubTitle = styled.p`
    margin-top: 20px;
    font-size: 25px;
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    margin-bottom: 10px;
    

    &.last{
        margin-bottom: 50px;
    }

    @media(max-width: 820px){
        padding-left: 0px;
        font-size: 22px;
    }

    @media(max-width: 768px){
        width: 100%;
        font-size: 0.5em;
        padding-left: 0px;

        &.last{
            margin: 10px auto 30px auto;
        }
    }
`;

const HeroImg = styled.div`
    width: 55%;
    font-size: 50px;
    margin: 0px auto;
    color: ${props => props.theme.fontColor};

    @media(max-width: 1024px){
        text-align: left;
    }

    @media(max-width: 768px){
        width: 100%;
        margin: 0px auto;
        text-align: center;
    }

    @media(max-width: 500px){
        height: 280px;
        width: 280px;
        text-align: center;
    }

    @media(max-width: 375px){
        height: 200px;
        width: 200px;
        text-align: center;
    }

`;

const ImgBg = styled.div`
    display: inline-block;
    position:relative;
    height: 400px;
    width: 400px;
    background-color: ${props => props.theme.fontColor};
    margin: 0px auto;
    border-radius: 100%;
    overflow: hidden;

    @media(max-width: 930px){
        height: 330px;
        width: 330px;
        text-align: left;
    }

    @media(max-width: 768px){
        height: 300px;
        width: 300px;
        margin: 0px auto;
        float: none;
        text-align: center;
    }

    @media(max-width: 375px){
        height: 200px;
        width: 200px;
        text-align: center;
    }


`;

const AboutPic = styled.img`
    display: block;
    position: absolute;
    margin: auto;
    max-width: 100%;
    object-fit: contain;
`;



const About = (props) => {
    return (
        <Bg>
            <div id='about'>
                <HeroDiv>
                    <HeroImg>
                        <ImgBg>
                            <AboutPic src={Profile} alt="Another picture of me, taking a picture of me"/>
                        </ImgBg>
                    </HeroImg>
                    <Title>
                        About Me
                        <SubTitle>I have a journalism background, graduating from the University of Toronto & Centennial College Joint Program in 2019. Transitioning to web development, I learned and worked on web projects at Humber College's Web Development Program.</SubTitle>
                        <SubTitle className='last'>When I'm not coding, I'm either cycling, shooting photos, or watching Raptors basketball.</SubTitle>
                    </Title>
                </HeroDiv>
            </div>
        </Bg>
    )
}

export default About
