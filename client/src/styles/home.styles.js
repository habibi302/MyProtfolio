import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HomePage = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2D2E32;
    `;

    const Container = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    margin: 0;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    overflow: hidden;

    @media screen and (max-width: 1253px) {
    
        display: block;
    }

    @media screen and (max-width: 780px) {
    display: block;
    max-width: 100%;
    }
    `;

    const LeftSide = styled.div`
    max-width: fit-content;
    padding-left: 3vw;

    @media screen and (max-width: 1253px) {
        padding-left: 0;
    }

    @media  screen and (max-width: 780px ) {
        padding-left: 0;
        min-width: 80vw;
    }
    `;

    const MyTitle = styled.h1`
    margin: 0;
    padding: 5px;
    border-radius: 3px;
    background-color: rgb(104, 240, 160);
    color: #2D2E32;
    font-family: 'Poppins', sans-serif;
    font-size: small;
    max-width: fit-content;

    @media screen and (max-width: 1253px) {
        margin: auto;
    }
    `;

    const MySlogan = styled.p`
    &{
    margin: 0;
    padding: 0;
    margin-top: 4vh;
    color: white;
    font-family: 'Share Tech Mono', monospace;
    font-size: 3rem;
    font-weight: lighter;
    white-space: nowrap;
    position: relative;
    }

    &:before{
    content: "";
    position: absolute;
    }

    &:after{
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation: forwards 4s steps(23);
    }

    @media screen and (max-width: 1253px) {
        text-align: center;
        font-size: 2rem;
    }
    `;


    const MyDesc = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 4vh;
    color: rgb(156, 156, 156);
    font-family: 'Share Tech Mono', monospace;
    width: 50%;

    @media screen and (max-width: 1253px) {
        text-align: center;
        padding: 0 20% 0 20%;
        width: 100%;
    }

    @media screen and (max-width: 780px) {
        text-align: center;
        width: 100%;
    }
    `;

    const ChatWithMe = styled.p`
    margin: 0;
    padding: 0;
    padding-top: 8vh;
    color: rgb(104, 240, 160);
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight:normal;
    text-decoration: underline;

    @media screen and (max-width: 1253px) {
        text-align: center;
    }
    `;

    const WorksAndExp = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: -7.5vw;
    padding-top: 16vh;
    padding-bottom: 4%;

    @media screen and (max-width: 1253px) {
        margin: auto;
        padding-top: 8vh;
    }
    `;

    const Experiences = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    const Works = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    const Years = styled.h1`
    padding: 0;
    margin: 0;
    color: white;
    padding-right: 1rem;
    height: fit-content;
    font-family:Arial, Helvetica, sans-serif;
    `

    const YearsDesc = styled.p`
    padding: 0;
    margin: 0;
    color: rgb(153, 153, 153);
    height: fit-content;
    font-family: 'Poppins', sans-serif;
    text-transform: uppedrcase;
    font-weight:normal;
    font-size:small;
    `

    const RightSide = styled.div`
    position: relative;
    height: max-content;
    width: 45%;

    @media screen and (max-width: 1253px) {
    
        margin-top: 7.8vh;
        width: 70%;
        max-width: 35rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media  screen and (max-width: 780px ) {
        margin-top: 4.5vh;
        width:100%;
        margin-left: auto;
        margin-right: auto;
    }
    `;

    const Circle = styled.div`
    height: 40vw;
    width: 40vw;
    border-radius: 100%;
    background-color: rgb(43, 43, 43);
    margin-right: 7.5vw;

    @media screen and (max-width: 1253px) {
    
        height: 60vw;
        width: 60vw;
        max-width: 35rem;
        max-height: 35rem;
        margin-right: 0;
    }

    @media  screen and (max-width: 780px ) {
        height: 80vw;
        width: 80vw;
        margin-right: 10vh;
    }
    `;

    const NodeJs = styled.div`
    height: 7vw;
    width: 7vw;
    border-radius: 100%;
    background-color: rgb(29, 29, 29);
    position:absolute;
    top: 7%;
    left: 7%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1253px) {
    
        top: 11%;
        left: 8%;
    }

    @media  screen and (max-width: 780px ) {
        top: 13%;
    }
    `;

    const NodeJsIcon = styled(FontAwesomeIcon)`
    height: 5vw;
    width: 5vw;
    position: absolute;
    color: rgb(104, 240, 160);
    top: 13%;
    `;

    const ReactJs = styled.div`
    height: 9vw;
    width: 9vw;
    border-radius: 100%;
    background-color: rgb(29, 29, 29);
    position:absolute;
    top: 2.5%;
    right: 2.5%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1253px) {
    
        top: 5%;
        right: 10%;
    }

    @media  screen and (max-width: 780px ) {
        right:16%;
    }
    `;

    const ReactJsIcon = styled(FontAwesomeIcon)`
    height: 7vw;
    width: 7vw;
    position: absolute;
    color: rgb(85, 170, 250);
    top: 11%;
    `;

    const Dot = styled.div`
    height: .5vw;
    width: .5vw;
    border-radius: 100%;
    background-color: rgb(104, 240, 160);
    position:absolute;
    bottom: 40%;
    right: -8%;

    @media screen and (max-width: 1253px) {
    
        right: -10%;
    }

    @media  screen and (max-width: 780px ) {
        right: -10%;
    }
    `;

    const MyPhoto = styled.img`
    width: 70%;
    height: 70%;
    position: absolute;
    top: 40%;
    left: 15%;
    `;
    

    
    export {HomePage, Container, LeftSide, MyTitle,
         MySlogan, MyDesc, ChatWithMe, WorksAndExp,
         Experiences, Works, RightSide, Circle,
        NodeJs, NodeJsIcon, ReactJs, ReactJsIcon, Dot,
    MyPhoto, Years, YearsDesc};