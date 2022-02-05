import React from 'react'
import styled from 'styled-components'


const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 0px;
        flex-direction: column;
        height: 100vh;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 650px;
    }
`;

const HeroDiv = styled.div`
    width: 80%;
    margin: auto;
    height: 90vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media(max-width: 768px){
        padding-top: 100px;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 40px;
        height: 100%;
    }
`;

const Title = styled.h1`
    display: block;
    position: relative;
    margin-top: 40px;
    font-size: 45px;
    color: ${props => props.theme.fontColor};
    width: 45%;
    font-weight: 700;
    float: left;

    @media(max-width: 768px){
        font-size: 2.3em;
        text-align: center;
        width: 100%;
        margin: 30px auto;
    }
`;

const SubTitle = styled.p`
    margin-top: 20px;
    font-size: 20px;
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    margin-bottom: 10px;

    &.last{
        margin-bottom: 50px;
    }

    @media(max-width: 820px){
        padding-left: 0px;
        font-size: 18px;
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
    right: 0;
    width: 50%;
    font-size: 50px;
    color: ${props => props.theme.fontColor};

    @media(max-width: 768px){
        width: 80%;
    }
`;

const AboutPic = styled.img`
    display: block;
    margin: 0px auto 0px auto;
    padding: 10px;
    height: 90%;
    max-width: 105%;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.fontColor};
    box-shadow: 6px 10px 15px -3px ${props => props.theme.fontColor};
`;


const ResumeBtn = styled.a`
    appearance: button; 
    -webkit-appearance: none;
    font-size: 20px;
    margin: 20px 0px;
    border: 1px solid ${props => props.theme.fontColor};
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
                        <AboutPic src={props.img}/>
                </HeroImg>
                <Title>
                    {props.title}
                    <SubTitle className='first'>{props.subTitle1}</SubTitle>
                    <SubTitle className='last'>{props.subTitle2}</SubTitle>
                </Title>
            </HeroDiv>
        </Bg>

    )
}

export default Hero