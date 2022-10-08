import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link as LinkR } from "react-scroll";

const Container = styled.div`
    margin: 0;
    padding: 0;
    padding-top: 6%;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    padding-bottom: 3%;
    display: flex;
    justify-content:space-around;
    background-color: #2D2E32;

    @media screen and (max-width: 1253px) {
        display: block;
        text-align: center;
    }
`;

const TopSide = styled.div`
    
`;

const LeftSide = styled.div`
`;


const H1 = styled.h1`
    margin: 0;
    padding-bottom: 10%;
    font-family: 'Share Tech Mono', monospace;
    color: white;
    font-weight: normal;
`;


const Span = styled.span`
    color: rgb(104, 240, 160);
    text-decoration: underline;
    text-underline-position: under;
`;

const LBottomSide = styled.div`
    margin: 0;
    padding: 0;
    margin-top: 7%;
    margin-right: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1253px) {
        display: block;
        margin: 0;
    }
`;

const FirstPart = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size: small;
    transition: color .5s, text-shadow .5s;
`;

const LastPart = styled.span`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: small;
    font-weight:lighter;
    transition: color .5s, text-shadow .5s;
    margin-left: 2px;
`;

const BrandName = styled.div`
    &:hover{
        text-shadow: .5px .5px 1.5px rgb(104, 240, 160);
    }
`;

const CopyRight = styled.div`
    font-family: 'Share Tech Mono', monospace;
    color: rgb(153, 153, 153);
`;

const RightSide = styled.div`
    margin: 0;
    padding: 0;
`;

const P = styled.p`
    margin: 0;
    padding: 0;
    font-family: 'Share Tech Mono', monospace;
    font-size: small;
    color: rgb(153, 153, 153);
`;

const H4 = styled.h4`
    margin: 0;
    padding: 0;
    padding-top: 10%;
    font-family: 'Share Tech Mono', monospace;
    font-size: small;
    color: rgb(153, 153, 153);  
`;


const H2 = styled.h2`
    margin: 0;
    padding: 0;
    padding-top: 4%;
    font-family: 'Share Tech Mono', monospace;
    font-size: large;
    font-weight: normal;
    color: white;  
`;

const MiddleSide = styled.div`
    margin: 0;
    padding: 0;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    padding-top: 15%;
    font-family: 'Share Tech Mono', monospace;
    font-size: smaller;
    color: white;  
    list-style: none;
`;

const Item = styled.li`
    padding-top: 5.4%;
    cursor: pointer;

    &:hover{
        color: rgb(104, 240, 160);
        &::before{
        content:"< ";
    }

    &::after{
        content:" >";
    }
    }
`;

const RBottomSide = styled.div`
    margin: 0;
    padding: 0;
    padding-right: 40%;
    padding-top: 15%;
    display: flex;
    justify-content: space-between;
    color: white;

    @media screen and (max-width: 1253px) {
        padding: 0;
        justify-content: space-evenly;
        margin-right: 35%;
        margin-left: 35%;
        margin-top: 20%;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    color: white;
    transition: color, .3s, margin .5s;
    &:hover{
        color: rgb(104, 240, 160);
    }
`;

const A = styled.a`
    color: white;
    font-size: large;
    padding: 10px;
    margin: 0;
    cursor: pointer;

    @media (max-width: 1130px){
        padding: 8px;
        cursor: pointer;
    }
`

const Link = styled(LinkR)`

`;

export {Container, TopSide, LeftSide, H1, Span, LBottomSide,
FirstPart, LastPart, BrandName, CopyRight, RightSide, P, H4, H2,
MiddleSide, List, Item, RBottomSide, Icon, A, Link};