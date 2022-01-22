import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LinkedInLogo } from "../img/linkedin.svg"
import { ReactComponent as MailLogo } from "../img/mail.svg"

const Bg = styled.div`
    width: 100%;
    height: 845px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    padding-top: 50px;

    @media(max-width: 500px){
        height: 750px;
    }
`;

const ContactDiv = styled.div`
    position: relative;
    width: 80%;
    margin: 0px auto;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    border-top: 5px solid ${props => props.theme.fontColor};

    @media(max-width: 500px){
        height: 500px;
    }
`;

const Title = styled.h1`
    margin: 100px 0px 0px 0px;
    font-size: 50px;
    color: ${props => props.theme.fontColor};
    height: 50px;
    width: 100%;
    text-align: center;

    div{
        margin-bottom: 30px;
    }

    #first{
        margin-top: 75px;
    }

    @media(max-width: 768px){
        text-align: center;
        #first{
            margin-bottom: 10px;
        }
        
    }
`;

const SubTitle = styled.p`
    margin: 50px auto 20px auto;
    font-size: 25px;
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    margin-bottom: 50px;
    text-align: center;


    @media(max-width: 820px){
        padding-left: 20px;
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

const ResumeBtn = styled.a`
    appearance: button; 
    -webkit-appearance: none;
    display: inline-block;
    font-size: 35px;
    text-align: center;
    margin: 10px;
    border-radius: 50px;
    padding: 30px 60px;
    border: 1px solid ${props => props.theme.fontColor};
    color: ${props => props.theme.fontColor};
    text-decoration: none;

    svg {
        width: 25px;
        fill: ${props => props.theme.fontColor};
        stroke: ${props => props.theme.body};
    }


    &:hover{
        background-color: ${props => props.theme.fontColor};
        color: ${props => props.theme.body};
        transform: scale(1.02); 
    }

    &:hover svg {
        width: 25px;
        fill: ${props => props.theme.body};
        stroke: ${props => props.theme.fontColor};
    }

    &:active{
        transform: scale(0.98); 
    }

    @media(max-width: 600px){
        font-size: 20px;
        padding: 30px 50px;
        margin-bottom: 10px;

        svg{
            width: 20px;
        }
    }

`;



const Contact = (props) => {
    return (
        <Bg>
            <div id='contact'>
                <ContactDiv>
                    <Title>
                        Contact
                        <SubTitle>
                            Got any questions? Inquiries? I am available on LinkedIn or you can shoot me an email
                        </SubTitle>
                        <div id='first'>
                            <ResumeBtn href='https://www.linkedin.com/in/ahmhagar/' target="_blank" rel="noopener noreferrer" id='linkedin'>
                                Connect on LinkedIn <LinkedInLogo />
                            </ResumeBtn>
                        </div>
                        <div>
                            <ResumeBtn href='' >
                                Send an Email <MailLogo />
                            </ResumeBtn>
                        </div>
                    </Title>
                </ContactDiv>
            </div>
        </Bg>
    )
}

export default Contact
