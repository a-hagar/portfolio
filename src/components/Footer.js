import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 105px;
    margin-bottom: 0;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        
    }
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

    @media(max-width: 768px){

    }
`;

const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: 800;
    padding: 1rem 0;
    text-decoration: none;
    color: #272932;
    display: flex;
    align-items:center;

    &:hover{
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }

    span {
        font-weight: 300;
    }
`;

const Copyright = styled.div`
    p, a{
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        padding: 10px 0px;
        margin: 10px 0px;
    }

    a:hover{
        text-decoration: underline;
    }

    a:visited{
        color: ${props => props.theme.fontColor};
    }
`;

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterContent>
                <Logo href='/'>
                </Logo>
                <Copyright>
                    <p>
                        &copy; {(new Date().getFullYear())}, Made by A Hagar
                    </p>
                </Copyright>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
