import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 4%;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    background-color: #232325;

    @media screen and (max-width: 1253px) {
    
        display: block;
}
`;

const Left = styled.div`
    padding: 3%;
`;

const Right = styled.div`
    padding: 3%;
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 500;
    font-weight: normal;
    text-align: center;
`;

const Desc = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 16%;
    margin-top: 2%;
    text-align: center;
    color: rgb(153, 153, 153);
    font-family: 'Poppins', sans-serif;
    font-size: small;
`;

const AllProjectText = styled.h1`
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 2%;
    padding-bottom: 4%;
    text-align: center;
    color: rgb(104, 240, 160);
    font-family: 'Poppins', sans-serif;
    text-decoration: underline;
    font-size: x-large;
    font-weight: normal;
    background-color: #232325;
`;

export {Container, Left, Right, Title, Desc, AllProjectText};