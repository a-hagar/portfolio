import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 81vh;
    background-color: ${props => props.theme.fontColor};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 0px;
        height: 80vh;
        min-height: 1100px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 800px;
    }
`;

const SafeDineProblemDiv = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 0px auto 0px auto;

    @media(max-width: 768px){
        flex-direction: column-reverse;
        justify-content:center;
        padding-top: 0px;
        width: 100%;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 0px;
        height: 100%;
    }
`;

const SafeDineProblemText = styled.div`
    width: 50%;
    color: ${props => props.theme.body};

    h1{
        font-size: 25px;
    }

    p{
        font-size: 20px;
    }

    li{
        padding-bottom: 10px;
        font-size: 20px;
    }

    @media(max-width: 768px){
        width: 80%;

    }

`;

const SafeDineProblemImg = styled.div`
    width: 50%;
    height: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding-left: 20px;
    
    p{
        color: ${props => props.theme.body};
        margin: 5px 20px 5px 0px;
        text-align: right;
    }

    @media(max-width: 768px){
        width: 100%;
        padding: 0px;

        p{
            width: 50%;
            margin: 0px auto;
            text-align: center;
            font-size: 15px;
        }

    }
`;

const SafeDineProblemPic = styled.img`
    width: 100%;
`;


const SafeDineProblem = (props) => {
  return (
    <Bg>
        <SafeDineProblemDiv>
            <SafeDineProblemText>
                <h2>Problem</h2>
                <p>
                    Many users use food delivery apps to get access to their favourite restaurants and meals. There is no single place to find important info about a restaurant.
                </p>
                <p> The project aims to solve the following problems:</p>
                <ul>
                    <li>Present latest food inspections (such as Toronto's DineSafe grading)</li>
                    <li>Listing available delivery app options (UberEats, SkipTheDishes, etc.)</li>
                    <li>An easier way to find nearby restaurants</li>
                </ul>
            </SafeDineProblemText>
            <SafeDineProblemImg>
                <SafeDineProblemPic src={props.img} alt="Uber Eats on smartphones"/>
                <p>Uber Eats app presenting limited info on restaurants using their services.</p>
            </SafeDineProblemImg>
        </SafeDineProblemDiv>
    </Bg>
    );
}

export default SafeDineProblem;