import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 81vh;
    min-height: 800px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        height: 80vh;
        min-height: 850px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const NextStepsDiv = styled.div`
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

const NextStepsText = styled.div`
    margin-top: 20px;
    width: 80%;
    color: ${props => props.theme.fontColor};


    p{
        font-size: 20px;
    }

    li{
        padding-bottom: 10px;
        font-size: 20px;

    }

    p, li{
        width: 80%;
        margin: auto;
    }

    h3{
        margin: 20px auto;
        text-align: center;
        font-size: 35px;
    }

    @media(max-width: 768px){
        width: 80%;

    }

`;

const SafeDineNextSteps = (props) => {
  return (
    <Bg>
        <NextStepsDiv>
            <NextStepsText>
                <h3>Next Steps</h3>
                <p>After the usability test, I aim to build the site to make accessiblity changes.</p>
                <ul>
                    <li>Rebuild the app with Next.js & Tailwind</li>
                    <li>Replace Google Maps with LeafletJS for better keyboard accessiblity</li>
                    <li>Include modal that presents keyboard controls</li>
                </ul>
            </NextStepsText>
        </NextStepsDiv>
    </Bg>
  )
}

export default SafeDineNextSteps