import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    min-height: 1500px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        height: 80vh;
        min-height: 1300px;
    }

    @media (orientation:landscape) and (max-width: 800px){
        height: 750px;
    }
`;

const UXDesignDiv = styled.div`

`;

const UXDesign = (props) => {
    return( 
        <Bg>
            <UXDesignDiv>

            </UXDesignDiv>
        </Bg>
    )
};

export default UXDesign;
