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

const URDiv = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto 0px auto;
    padding-top: 50px;

    @media(max-width: 768px){
        flex-direction: column;
        padding-top: 0px;
        width: 100%;
    }

    @media (orientation:landscape) and (max-width: 800px){
        padding-top: 40px;
        height: 100%;
    }
`;

const URText = styled.div`
    width: 100%;
    color: ${props => props.theme.fontColor};

    h1{
        font-size: 25px;
    }

    p{
        font-size: 20px;
    }

    li{
        padding-bottom: 10px;
        font-size: 18px;
    }

    @media(max-width: 768px){
        width: 80%;
    }

`;

const URSecondText = styled.div`
    width: 100%;
    height: 100%;
    max-height: 275px;
    padding: 100px 0px 150px;
    color: ${props => props.theme.body};
    font-size: 20px;
    background-color: ${props => props.theme.fontColor};
    margin: 30px auto;
    border-radius: 30px;

    li{
        padding-bottom: 15px;
    }

    p{
        font-size: 15px;
        padding-left: 20px;
    }

    h3{
        margin-top: 15px;
    }

    #sub{
        padding-top: 0px;
        margin-left: 100px;
    }

    a{
        color: ${props => props.theme.body};
    }

    h3, li, p{
        margin-left: 50px;
    }

    @media(max-width: 768px){
        width: 90%;
        min-height: 400px;

        h3, li, p{
            margin: 0px 0px 0px 10px;
        }

        #sub{
            padding-top: 0px;
            margin-left: 50px;
        }
    }

`;

const PersonaDiv = styled.div`
    width: 80%;

    color: ${props => props.theme.fontColor};

    h3{
        font-size: 25px;
    }

    p{
        font-size: 20px;
    }

    @media(max-width: 768px){
        width: 80%;
        min-height: 400px;
    }
}
`;

const TrackUserResearch = () => {
  return(
    <Bg>
        <URDiv>
            <URText>
                <h2>Secondary Research</h2>
                <p>Creating this app, I conducted research on Spotify, its users, and the Spotify Wrapped campaign. I created user personas based on this research.</p>
            </URText>
            <URSecondText>
                <h3>Context on Spotify</h3>
                <ul>
                    <li>408 million monthly global users, including 180 million paid subscribers*</li>
                    <li>11.3 million active users from Canada</li>
                    <li>120 million users engaged with the 2021 Wrapped campaign*</li>
                    <li id='sub'> approx. 60 million shares across social media platforms</li>
                    <li>26% of Spotify users are between 18-24 years of age, and 29% are between 25-34 years of age**</li>
                </ul>
                <p>*According to Spotify's 2021 Q4 <a href="https://s22.q4cdn.com/540910603/files/doc_financials/2021/q4/Shareholder-Letter-Q4-2021_FINAL.pdf#page=2" rel="noreferrer" target="_blank">Shareholder's Letter</a></p>
                <p>**According to a <a href='https://www.statista.com/statistics/475821/spotify-users-age-usa/' rel="noreferrer" target="_blank">2018 study</a> of American Spotify users</p>
            </URSecondText>  
            <PersonaDiv>
                <h3>Persona</h3>
                <p>The created persona was someone who had the disposable income, internet access and being a regular Spotify user  to want more access to their listening data. They would also meet Spotify's target and most-active audience.</p>
        </PersonaDiv>          
        </URDiv>
    </Bg>
  )
};

export default TrackUserResearch;
