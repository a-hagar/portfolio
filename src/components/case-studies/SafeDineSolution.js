import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 81vh;
    min-height: 1100px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        height: 80vh;
        min-height: 800px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const SolutionDiv = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 0px auto 0px auto;

    @media(max-width: 768px){
        flex-direction: column-reverse;
        justify-content:center;
        padding-top: 0px;
        width: 100%;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 40px;
        height: 100%;
    }
`;

const SolutionText = styled.div`
    margin-top: 20px;
    width: 80%;
    color: ${props => props.theme.fontColor};

    h1{
        font-size: 25px;
    }

    p{
        font-size: 20px;
    }

    li{
        padding-bottom: 10px;
    }

    h3{
        margin: 200px auto;
        text-align: center;
        font-size: 30px;
    }

    @media(max-width: 768px){
        width: 80%;

    }

`;

const SolutionImg = styled.div`
    width: 70%;

    p{
        width: 75%;
        margin: 0px auto 10px;
        color: ${props => props.theme.fontColor};
        text-align: center;
    }

    @media(max-width: 768px){
        width: 97%;
        padding: 0px;
    }
`;

const SolutionPic = styled.img`
    width: 100%;
    margin: 0px auto;
`;


const SafeDineSolution = (props) => {
  return (
    <Bg>
        <SolutionDiv>
            <SolutionText>
                <h2>Solution</h2>
                <p>
                    SafeDine aims to be a one-stop-shop to access restaurant information before ordering online. The app pulls data from Toronto's DineSafe inspection data to show how safe a restaurant is. Users can also find the delivery options available. Receiving restaurant data from Yelp's API and using the Google Maps API to display the locations.
                </p>
            </SolutionText>
            <SolutionImg>
                <SolutionPic src={props.img} alt="The SafeDine prototypes made in Figma"/>
            </SolutionImg>
        </SolutionDiv>
    </Bg>
);}

export default SafeDineSolution;