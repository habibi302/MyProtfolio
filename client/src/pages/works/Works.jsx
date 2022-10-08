import React from 'react'
import { WorkCard } from '../../core-ui'
import RecentWorkData from '../../constant/RecentWrokData';

import {Container, Left, Right, Title, Desc, AllProjectText} from "../../styles/works.styles";

export default function Works() {
  return (
    <>
        <Container id='works'>
          <Left>
            <Title>Latest Works</Title>
            <Desc>Perfect solutions fro digital experience</Desc>
            <WorkCard title={RecentWorkData[0].title} techStack={RecentWorkData[0].techStack} image={require("../../assests/images/RProjectOne.png")} links={RecentWorkData[0].links}/>
          </Left>

          <Right>
            {/* <WorkCard title={RecentWorkData[1].title} techStack={RecentWorkData[1].techStack}  image={require("../../assests/images/RProjectTwo.png")}/>
            <WorkCard title={RecentWorkData[2].title} techStack={RecentWorkData[2].techStack} image={require("../../assests/images/RProjectThree.png")}/> */}
          </Right>
         </Container> 
         <AllProjectText>ALL PROJECTS</AllProjectText>
    </>
  )
}
