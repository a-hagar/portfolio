import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
    width: 100%;
    min-height: 1200px;
    background-color: ${props => props.theme.body};
    transition: all 0.5s ease;
    
    @media(max-width: 768px){
        padding-top: 20px;
        min-height: 1600px;
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
    padding: 50px 0px 130px;
    color: ${props => props.theme.body};
    font-size: 20px;
    background-color: ${props => props.theme.fontColor};
    margin: 20px auto;
    border-radius: 30px;

    li{
        padding-bottom: 15px;
        padding-right: 50px;
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
        min-height: 500px;

        h3{
            margin: 0px auto;
            text-align: center;
        }

        h3, li, p{
            margin: 0px 0px 0px 10px;
        }

        li{
            padding-right: 30px;
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

const SafeDineResearch = (props) => {
  return(
    <Bg>
        <URDiv>
            <URText>
                <h2>Primary Research</h2>
                <p>After completing the MVP, I created a usability test to gauge how to improve the website's accessibility for keyboard users.</p>
                <p>The test involves users navigating the site to enter a location and select a location on the list and from the Google Maps window. The tasks will also be timed. The test will gauge the difficulty of performing the tasks and how they felt about the experience.</p>
            </URText>
            <URSecondText>
                <h3>Testing Info</h3>
                <ul>
                    <li>I interviewed 5 participants, ranging from 19 to 60 years of age</li>
                    <li>The testing took place in-person in the Greater Toronto Area</li>
                    <li>All participants will use a Macbook Pro with the website on Google Chrome</li>
                    <li>I used a system usability scale to gauge the difficulty the participants faced completing the tasks</li>
                        <li id='sub'>All tests will be timed and will track critical errors (such as when partipants need assistance)</li>
                        <li id='sub'>The test will also ask questions to collect qualitative data to gauge the user experience</li>
                </ul>
            </URSecondText>  
            <PersonaDiv>
                <h3>Results/Recommendations</h3>
                <p>The average time to complete the test was 3:32 minutes, with a range of 1:54 to 5:47.</p>
                <p>
                    The results from the System Usability Scale found a user scoring the test a 4 out of 5, requiring more assistance. Three participants had little assistance and scored the test a 3. Only one user scored the test a 2 out of 5.
                </p>
                <p>
                    The main takeaway was to improve the accessibility was to improve how users can interact with the Map window. Issues include the map's centred coordinates not changing when tabbing between pointers and some users having difficulty zooming in and out.
                </p>
                <p>
                    A common recommendation was having the selected item from the results list highlight the pointer on the map. Other recommendations given include improving accessibility controls for the map window or listing the keyboard controls on the website.
                </p>
        </PersonaDiv>          
        </URDiv>
    </Bg>
  )
};

export default SafeDineResearch;