import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoPic} from "../img/nav-logo.svg";
import PDF from "../files/Hagar_resume.pdf";
//import { ReactComponent as LinkedInLogo } from "../img/linkedin.svg"
//import { ReactComponent as GithubLogo } from "../img/github.svg"

const Header = styled.header`
    position: sticky;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.body};
    display: flex;
    align-items: center;
    transition: all 0.5s ease;

    @media(max-width: 768px){
        position: relative;
    }
`;

const NavContent = styled.nav`
    margin: 0px auto;
    padding: 0px 0px 0px 0px;
    width: 80%;
    max-width: 1000px;
    height: 90px;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.5s ease;
    //border-bottom: 2px solid ${props => props.theme.fontColor};

    @media(max-width: 768px){
        flex-direction: row-reverse;
    }
`;

const Logo = styled.a`
    font-size: 1.5rem;
    padding: 1rem 0;
    text-decoration: none;
    color: ${props => props.theme.fontColor};
    display: flex;
    align-items:center;
    transition: color 5s ease;

    svg{
        width: 60px;
        height: 60px;

        rect{
            fill: ${props => props.theme.fontColor};
            stroke: ${props => props.theme.fontColor};
        }

        path{
            fill: ${props => props.theme.body};
        }
    }

    svg:hover{
        rect{
            fill: ${props => props.theme.body};
        }

        path{
            fill: ${props => props.theme.fontColor};
        }
    }

    svg:active{
        transform: scale(0.95);
    }

    &:hover{
        text-decoration: underline;
        transition: text-decoration 0.5s ease;
    }

    &:visited{
        color: ${props => props.theme.fontColor};
    }
`;


const Menu = styled.div`
    display: flex;
    justify-content:  space-between;
    align-items: center;
    position: relative;
    width: 300px;
    
    @media(max-width: 768px){
        display: none;
    }

`;

const MenuLink = styled.a`
    padding: 0.1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.fontColor};
    font-size: 1rem;

    &:last-child{
        padding: 10px 20px;
        border: 1px solid ${props => props.theme.fontColor};
        border-radius: 10px;
    }

    &:hover&:last-child{
        background-color: ${props => props.theme.fontColor};
        color: ${props => props.theme.body};
    }

    &:hover{
        text-decoration: underline;
    }
`;

const ToggleContainer = styled.div`
    position: relative;
    width: 300px;

    @media(max-width: 768px){
        width: 75px;
    }
`;

const ToggleLabel = styled.label`
    position: absolute;
    top: 19%;
    left: 0px;
    width: 50px;
    height: 25px;
    border-radius: 15px;
    background: ${props => props.theme.fontColor};
    cursor: pointer;

    p{
        display: none;
    }

    &::focus {
        background: #272932;
    }

    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: ${props => props.theme.body};
        transition: 0.2s;
    }

    @media(max-width: 768px){
        left: 37%;
    }

`;

const Toggle = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    padding-top: 10px;
    
    &:checked + ${ToggleLabel} {
        background: ${props => props.theme.fontColor};

        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 28px;
            transition: 0.5s ease;
        }
    }
`;


const Navbar = (props) => {
    function changeTheme(){
        if(props.theme === "light"){
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    return (
        <Header>
            <NavContent>
                <ToggleContainer>
                        <Toggle id="checkbox" type="checkbox" onClick={changeTheme}/>
                        <ToggleLabel label="DarkModeSwitch" htmlFor="checkbox"><p>Toggle</p></ToggleLabel>
                </ToggleContainer>
                <Logo href='/' aria-label="Ahmed's Portfolio">
                    <LogoPic alt="Ahmed Hagar, the logo"/>
                </Logo>
                <Menu>
                    <MenuLink href='/#works'>Works</MenuLink>
                    <MenuLink href='/#about'>About</MenuLink>
                    <MenuLink href='/#contact'>Contact</MenuLink>
                    <MenuLink id="resumeBtn" href={PDF} target="_blank" rel="noreferrer">Resume</MenuLink>
                </Menu>
            </NavContent>
        </Header>
    )
}

export default Navbar
