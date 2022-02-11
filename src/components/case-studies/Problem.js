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

const ProblemDiv = styled.div`
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

const ProblemText = styled.div`
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

const ProblemImg = styled.div`
    width: 50%;
    margin-right: auto;
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
            margin: 0px;
            text-align: center;
            font-size: 15px;
        }

    }
`;

const ProblemPic = styled.img`
    width: 100%;
`;


const Problem = (props) => {
  return (
    <Bg>
        <ProblemDiv>
            <ProblemText>
                <h2>Problem</h2>
                <p>
                    Spotify users receive their annual listening data at the end of the year with Spotify Wrapped. Listeners can find out the albums, artists, and songs that they listened to the most.
                </p>
                <p> However, there are problems with this approach:</p>
                <ul>
                    <li>Users can only view their annual data during December</li>
                    <li>Spotify does not have an official means to access user data outside of Wrapped</li>
                    <li>Spotify Wrapped provides only yearly data of a user’s most-listened artists, songs, and albums</li>
                    <li>Since 2019, Wrapped is a mobile-only experience on the Spotify app</li>
                </ul>
            </ProblemText>
            <ProblemImg>
                <ProblemPic src={props.img} />
                <p>The 2021 Spotify Wrapped stories on smartphones</p>
            </ProblemImg>
        </ProblemDiv>
    </Bg>
    );
}

export default Problem;
