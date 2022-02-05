import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoPic} from "../img/nav-logo.svg"
import { ReactComponent as LinkedInLogo } from "../img/linkedin.svg"
import { ReactComponent as GithubLogo } from "../img/github.svg"

const Header = styled.header`
    width: 100%;
    height: 0px;
    background-color: ${props => props.theme.body};
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
`;

const NavContent = styled.nav`
    margin: 0px auto;
    padding: 20px 30px 5px 30px;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.5s ease;
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
    
    @media(max-width: 768px){
        display: none;
    }

`;

const MenuLink = styled.a`
    padding: 0.8rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.fontColor};
    font-size: 1.2rem;

    &:hover{
        text-decoration: underline;
    }
`;

const ToggleContainer = styled.div`
    position: relative;
    padding-right: 5px;
`;

const ToggleLabel = styled.label`
    position: absolute;
    top: 19%;
    left: 5%;
    width: 50px;
    height: 25px;
    border-radius: 15px;
    background: ${props => props.theme.fontColor};
    cursor: pointer;

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

const MenuLogo = styled.div`
    padding-top: 5px;
    
    svg {
        fill: ${props => props.theme.fontColor};
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
                <Logo href='https://ahmedhagar.com/'>
                    <LogoPic />
                </Logo>
                <Menu>
                    <MenuLink href='/#works'>Works</MenuLink>
                    <MenuLink href='/#about'>About</MenuLink>
                    <MenuLink href='/#contact'>Contact</MenuLink>
                    <MenuLink href='https://www.linkedin.com/in/ahmhagar/' target="_blank" rel="noopener noreferrer">
                        <MenuLogo>
                            <LinkedInLogo />
                        </MenuLogo>
                    </MenuLink>
                    <MenuLink href='https://github.com/a-hagar' target="_blank" rel="noopener noreferrer">
                        <MenuLogo>
                            <GithubLogo />
                        </MenuLogo>
                    </MenuLink>
                </Menu>
                <ToggleContainer>
                        <Toggle id="checkbox" type="checkbox" label="DarkModeSwitch" onClick={changeTheme}/>
                        <ToggleLabel htmlFor="checkbox" />
                </ToggleContainer>
            </NavContent>
        </Header>
    )
}

export default Navbar
