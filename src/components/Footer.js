import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoPic} from "../img/nav-logo.svg";

const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 105px;
    margin-bottom: -10px;
    background-color: ${props => props.theme.fontColor};
    transition: all 0.5s ease;

`;

const FooterContent = styled.footer`
    margin: 0px auto 0px;
    height: 90%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-top: 0.5px solid ${props => props.theme.fontColor};

`;

const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: 800;
    padding: 1rem 0;
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
            stroke: ${props => props.theme.body};
        }

        path{
            fill: ${props => props.theme.fontColor};
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
        color: ${props => props.theme.body};
        padding: 10px 0px;
        margin: 10px 0px;
    }

    a:hover{
        text-decoration: underline;
    }

    a:visited{
        color: ${props => props.theme.fontColor};
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
                <Logo href='/'>
                <LogoPic />
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
