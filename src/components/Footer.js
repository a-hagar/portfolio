import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoPic} from "../img/nav-logo.svg";

const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.body};
    padding-top: 20px;
    padding-bottom: 10px;
    transition: all 0.5s ease;

`;

const FooterContent = styled.footer`
    margin: 0px auto 0px;
    height: 100%;
    width: 80%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: 800;
    padding:  0px;
    text-decoration: none;
    color: #272932;
    display: flex;
    align-items: center;

    &:hover{
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }

    span {
        font-weight: 300;
    }

    svg{
        width: 45px;
        height: 45px;

        rect{
            fill: ${props => props.theme.body};
            stroke: ${props => props.theme.fontColor};
        }

        path{
            fill: ${props => props.theme.fontColor};
        }
    }
    
    svg:hover{
        rect{
            fill: ${props => props.theme.fontColor};
            stroke: ${props => props.theme.body};
        }

        path{
            fill: ${props => props.theme.body};
        }
    }


    &:hover{
        text-decoration: underline;
        transition: text-decoration 0.5s ease;
    }

    &:visited{
        color: ${props => props.theme.fontColor};
    }

    @media(max-width: 355px){
        display: none;
    }
`;

const Copyright = styled.div`
    p, a{
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        padding: 10px 0px;
        margin: 10px 0px;
    }

    @media(max-width: 768px){
        p, a{
            text-align: center;
        }
    }
`;

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterContent>
                <Logo href='#top' aria-label="Ahmed's Portfolio">
                    <LogoPic alt="Ahmed Hagar, the logo on the Footer" />
                </Logo>
                <Copyright>
                    <p>
                        &copy; {(new Date().getFullYear())}, Made by Ahmed Hagar
                    </p>
                </Copyright>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
