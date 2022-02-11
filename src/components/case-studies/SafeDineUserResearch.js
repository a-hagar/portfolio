import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    height: 81vh;
    min-height: 900px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        height: 80vh;
        min-height: 700px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const URDiv = styled.div`
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
        padding-top: 40px;
        height: 100%;
    }
`;

const SafeDineUserResearch = () => {
  return (
    <Bg>
        <URDiv>
            
        </URDiv>
    </Bg>
    )
};

export default SafeDineUserResearch;
