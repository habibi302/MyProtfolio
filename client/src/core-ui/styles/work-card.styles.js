import styled from "styled-components";

const Container = styled.div`
    margin: 0;
    padding: 0;
    background-color: #191C21;
    border-radius: 15px;
    display: grid;
    position: relative;
    height: fit-content;
    width: 100%;
    margin-top: 10%;

    @media screen and (max-width: 1253px) {
        border-radius: 10px;
        width: 80%;
        margin: auto;
        margin-top: 5vw;
    }
`;

const TopSide = styled.div`
    margin: 0;
    padding: 0;
    padding-top: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`;

const LeftSide = styled.div`
    margin: 0;
    padding: 0;
    padding-right: 26%;
`;

const Title = styled.h1`
    font-family: 'Share Tech Mono', monospace;
    font-weight: normal;
    font-size: x-large;
    color: rgb(104, 240, 160);
    margin-left: 20px;

    @media screen and (max-width: 1253px) {
        font-size: 3vw;
    }
`;

const RightSide = styled.div`
    margin: 0;
    padding: 0;
`;

const H1 = styled.h1`
    margin:0;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 550;
    font-size: x-small;
    padding: .4vw;
    color: rgb(129, 129, 129);
    background-color: rgb(83, 83, 83);
    border-radius: 5px;
    display: inline;
    margin-left: 2px;
    margin-right: 2px;
    white-space: nowrap;

    @media screen and (max-width: 1253px) {
        font-size: 1.6vw;
        border-radius: 3px;
    }
`;

const A = styled.a`
    position:absolute;
    bottom:5px;
    left:5px;
    background-color:rgb(104, 240, 160);
    color:#2D2E32;
    border-radius:4px;
    padding:3px;
    font-family: Share Tech Mono , monospace;
    text-decoration:none;
`;

const BottomSide = styled.div`
    position: relative;
    padding-right: 5%;
    padding-top: 5%;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0 0 0px 10px;
`;





export {Container, TopSide, LeftSide, Title, RightSide,
H1, A, BottomSide, ProjectImage};