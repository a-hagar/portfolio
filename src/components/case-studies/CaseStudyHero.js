import React from 'react'
import styled from 'styled-components'


const Bg = styled.div`
    width: 100%;
    height: 81vh;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 0px;
        height: 75vh;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const HeroDiv = styled.div`
    width: 80%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px auto 0px auto;

    @media(max-width: 768px){
        padding-top: 0px;
        width: 100%;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 40px;
        height: 100%;
    }
`;

const Title = styled.h1`
    display: block;
    position: relative;
    margin: 20px 0px;
    font-size: 2em;
    color: ${props => props.theme.fontColor};
    width: 100%;
    height: 40%;
    max-height: 40%;
    font-weight: 700;

    @media(max-width: 768px){
        font-size: 2.3em;
        padding-top: 45%;
        height: 100%;
        width: 90%;
    }
`;

const SubTitle = styled.p`
    margin-top: 20px;
    font-size: 20px;
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    margin-bottom: 10px;

    &.last{
        width: 70%;
        margin-bottom: 50px;
    }

    @media(max-width: 820px){
        padding-left: 0px;
        font-size: 18px;
    }

    @media(max-width: 768px){
        width: 100%;
        font-size: 0.5em;
    }
`;

const HeroImg = styled.div`
    width: 100%;
    height: 40%;
    font-size: 50px;
    color: ${props => props.theme.fontColor};

    @media(max-width: 768px){
        width: 100%;
        height: 0px;
    }
`;

const AboutPic = styled.img`
    display: block;
    margin: 0px;
    padding: 0px;
    width: 100%;
    max-width: 1000px;
    max-height: 480px;
    height: auto;

    @media(max-width: 768px){
        max-width: 100%;
        max-height: 185px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        width: 100%;
    }
`;

const Hero = (props) => {
    return (
        <Bg>
            <HeroDiv>
                <HeroImg>
                        <AboutPic src={props.img}/>
                </HeroImg>
                <Title>
                    {props.title}
                    <SubTitle className='first'>{props.subTitle1}</SubTitle>
                    <SubTitle className='last'>Role: {props.subTitle2}</SubTitle>
                    
                </Title>
            </HeroDiv>
        </Bg>

    )
}

export default Hero