import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
    
const Container = styled.div`
    margin: 0;
    padding: 7.5vw;
    display: flex;
    justify-content: space-between;
    background-color: #232325;

    @media screen and (max-width: 1253px) {
        display: block;
    }
`;

const LeftSide = styled.div`
        display: flex; 
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    margin: 0;
    padding: 0;
    width: 60%;

    @media screen and (max-width: 1253px) {
        display: flex; 
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 85%;
    }
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-family: 'Poppins', sans-serif;
    font-size: larger;
    font-weight: normal;
    transition: color, .5s, margin .5s;
`;

const SkillsCard = styled.div`
    &{
    width: 30vw;
    height: fit-content;
    margin: 0;
    padding: 5%;
    background-color: #2D2E32;
    border-radius: 8px;
    transition: box-shadow, .5s, margin .5s;
    margin-top: 3%;
    z-index: 2;
    }

    &:hover{
    z-index: 1;
    box-shadow: 0px 20px 40px rgb(26, 25, 25);
    }

    &:hover ${Title}{
        color: rgb(104, 240, 160);
    }

    @media screen and (max-width: 1253px) {
        width: 62.5vw;
    }
`;


const TitleDescIcon = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    justify-items: center;
`;

const TitleDesc = styled.div`

`;


const Desc = styled.p`
    margin: 0;
    padding: 0;
    padding-top: 3%;
    color: rgb(153, 153, 153);
    font-family: 'Poppins', sans-serif;
    font-size: small;
    font-weight: normal;
`;

const Icon = styled(FontAwesomeIcon)`
    margin: 0;
    padding: 0;
    color: rgb(104, 240, 160);
    font-size: larger;
`;

const ProjectDone = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 4%;
    font-family: 'Poppins', sans-serif;
    font-size: x-small;
    color: white;
    cursor: pointer;
    text-decoration: underline;
    display: inline;

    &:hover{
        color: rgb(104, 240, 160);
    }
`;

const RightSide = styled.p`
    margin: 0;
    padding: 0;
    width: 50%;

    @media screen and (max-width: 1253px) {
        margin-top: 10%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 85%;
    }
`;

const Introduce = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 2%;
    font-family: 'Share Tech Mono', monospace;
    color: rgb(153, 153, 153);
    font-weight: normal;
`;

const HelloText = styled.h1`
    margin: 0;
    padding: 0;
    margin-top: 8%;
    font-family: 'Share Tech Mono', monospace;
    color: white;
    font-weight: normal;
`;
const SlogText = styled.h3`
    margin: 0;
    padding: 0;
    margin-top: 10%;
    font-family: 'Share Tech Mono', monospace;
    color: white;
    font-weight: normal;
    font-style: italic;
`;

const DescText = styled.h3`
    margin: 0;
    padding: 0;
    margin-top: 8%;
    font-family: 'Share Tech Mono', monospace;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: auto;
    text-align: left;

    @media screen and (max-width: 1253px) {
        text-align:center;
    }
`;

export {Container, LeftSide, SkillsCard, TitleDescIcon,
TitleDesc, Title, Desc, Icon, ProjectDone,
RightSide, Introduce, HelloText, SlogText, DescText};
