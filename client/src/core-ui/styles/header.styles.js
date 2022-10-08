import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as LinkR } from "react-scroll";
import styled from "styled-components";

const Nav = styled.div`
    padding-top: 20px;
    padding-bottom: 40px;
    background-color: #2D2E32
`;

const NavButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 10px;
    right: 2vw;
    margin: 1rem;
    font-size: 2.1rem;
    z-index: 2;
    color: white;
    cursor: pointer;

    @media (min-width: 1130px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    background-color: #232325;
    box-shadow: 0px 1px 10px rgb(10, 10, 10);
    transform: ${({ open }) => (open ? "translateY(0%);" : "translateY(-100%);")};
    transition: transform 150ms ease-in;
    display: ${({ open }) => (open ? "block;":"none;")};
@media (min-width: 1130px) {
        display: none;
    }
`;

const DesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #2D2E32;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
@media (max-width: 1130px) {
        display: none;
    }
`;

const BrandName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
    text-shadow: .5px .5px 1.5px rgb(104, 240, 160);
`;

const MBrandName = styled.div`
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2D2E32;
    position:relative;
    z-index:2;
    cursor: pointer;
    &:hover{
    text-shadow: .5px .5px 1.5px rgb(104, 240, 160);
    }

@media (min-width: 1130px) {
        display: none;
    }
`;

const FirstPart = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    font-size: xx-large;
    transition: color .5s, text-shadow .5s;
`;

const SecondPart = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: xx-large;
    font-weight:lighter;
    transition: color .5s, text-shadow .5s;
    margin-left: 6px;
`;

const Menus = styled.div`
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    color: white;
    display: flex;
    justify-content: center;
    padding-left: 0;

    @media (max-width: 1130px){
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
`;

const Item = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    @media (max-width: 1130px){
        flex-direction: column;
        width: 100%;
        text-align: center;

            ${'' /* background-color: #2D2E32;
            box-shadow: .5px .5px 5px rgb(104, 240, 160);
            transition: background-color 150ms ease-in;
            transition: box-shadow 150ms ease-in; */}

        &:hover{
            background-color: #2D2E32;
            box-shadow: 0px 1px 6px rgb(22, 22, 22);
            transition: background-color 150ms ease-in;
            transition: box-shadow 150ms ease-in;
        }
    }
`;

const Icon = styled(FontAwesomeIcon)`
        color: white;
        margin-right: 5px;
        transition: color, .3s, margin .3s;
`;

const Text = styled.span`
        transition: color, .3s, margin .3s;
`;

const A = styled.a`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: large;
    text-decoration: none;
    padding: 10px;
    margin: 0;
    cursor: pointer;

    @media (max-width: 1130px){
        padding: 8px;
    }

    &:hover ${Icon}{
        color: rgb(104, 240, 160);
    }
    &:hover ${Text}{
        color: rgb(104, 240, 160);
    }
`;


const Link = styled(LinkR)`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: large;
    text-decoration: none;
    padding: 10px;
    margin: 0;
    cursor: pointer;
    transition: all, .5s, margin .5s;

    @media (max-width: 1130px){
        padding: 8px;
        cursor: pointer;
    }

    &:hover{
        color: rgb(104, 240, 160);
        font-size: larger;
        &::before{
        content:"< ";
    }

    &::after{
        content:" >";
    }
    }
`;


const Contacts = styled.div`
    display: flex;
    align-items: center;
`;


const Dots = styled.div`
    height: 10px;
    width: 100%;
    border: 2px solid #2D2E32;;
    border-left: none;
    border-right: none;
    border-bottom: none;
`


export {Nav,NavButton, BrandName, MBrandName, FirstPart, SecondPart, Menus, List, Item, Link, A, Contacts, Icon, Text, MobileMenu, DesktopMenu, Dots};