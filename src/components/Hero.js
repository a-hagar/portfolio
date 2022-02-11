import React from 'react'
import styled from 'styled-components'
import Profile from "../img/hero_profile.png"

const Bg = styled.div`
    width: 100%;
    height: 70vh;
    min-height: 750px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 0px;
        flex-direction: column;
        height: 100vh;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 800px;
    }
`;

const HeroDiv = styled.div`
    width: 80%;
    max-width: 990px;
    margin: auto;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;

    @media(max-width: 768px){
        padding-top: 0px;
        flex-direction: column;
    }

    @media (orientation:landscape) and (max-width: 900px){
        padding-top: 50px;
        height: 0px;
    }
`;

const Title = styled.h1`
    display: block;
    position:relative;
    margin-top: 40px;
    font-size: 50px;
    color: ${props => props.theme.fontColor};
    width: 50%;
    font-weight: 700;

    @media(max-width: 768px){
        font-size: 2.3em;
        text-align: center;
        width: 100%;
        margin: 10px auto;
    }

    @media(max-width: 520px){
        margin: 10px auto;
    }


`;

const SubTitle = styled.p`
    margin-top: 25px;
    font-size: 25px;
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    margin-bottom: 10px;


    &.last{
        margin: 0px 0px 50px 0px;
    }

    @media(max-width: 820px){
        padding-left: 0px;
        font-size: 15px;
    }

    @media(max-width: 768px){
        margin-top: 15px;
        width: 100%;
        font-size: 20px;
        padding-left: 0px;

        &.last{
            margin: 10px auto 20px auto;
        }
    }

    @media(max-width: 520px){
        font-size: 20px;
        margin-bottom: 5px;

        &.last{
            margin: 5px auto 10px auto;
        }
    }

`;

const HeroImg = styled.div`
    right: 0;
    width: 50%;
    font-size: 50px;
    color: ${props => props.theme.fontColor};

    @media(max-width: 768px){
        width: 100%;
    }

`;

const ImgBg = styled.div`
    display: block;
    position:relative;
    height: 390px;
    width: 390px;
    background-color: ${props => props.theme.fontColor};
    float: right;
    border-radius: 100%;
    overflow: hidden;

    @media(max-width: 1024px){
        height: 330px;
        width: 330px;
    }

    @media(max-width: 768px){
        height: 300px;
        width: 300px;
        margin: 60px auto 0px;
        float: none;
    }

    @media(max-width: 500px){
        height: 280px;
        width: 280px;
    }

    @media(max-width: 375px){
        height: 200px;
        width: 200px;
    }


`;

const AboutPic = styled.img`
    display: block;
    position: absolute;
    margin: 40px auto 0px auto;
    height: 90%;
    max-width: 105%;
    object-fit: contain;
`;


const ResumeBtn = styled.a`
    appearance: button; 
    -webkit-appearance: none;
    font-size: 20px;
    margin: 20px 0px;
    border: 2px solid ${props => props.theme.fontColor};
    border-radius: 50px;
    padding: 20px 50px;
    color: ${props => props.theme.fontColor};
    text-decoration: none;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.fontColor};
        transform: scale(1.02);
        transition: all 0.3s ease;
    }

    &:active{
        transform: scale(0.90);
    }

    @media(max-width: 600px){
        font-size: 15px;
        padding: 15px 30px;
    }

`;

const Hero = (props) => {
    return (
        <Bg>
            <HeroDiv>
                <HeroImg>
                    <ImgBg>
                        <AboutPic src={Profile} alt="Hi! This is an image of Ahmed"/>
                    </ImgBg>
                </HeroImg>
                <Title>
                    Hello, my name is Ahmed!
                    <SubTitle className='first'>Developer. Designer. Writer.</SubTitle>
                    <SubTitle className='last'>Based in Toronto, 🇨🇦</SubTitle>
                    <ResumeBtn href="/#works">
                        View Past Work
                    </ResumeBtn>
                </Title>
            </HeroDiv>
        </Bg>

    )
}

export default Hero
