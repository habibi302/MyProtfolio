import React from 'react';

import {Container, TopSide, LeftSide, Title, RightSide,
    H1, A, BottomSide, ProjectImage} from "../core-ui/styles/work-card.styles";

export default function WorkCard({title, techStack,image, links}) {
  return (
    <>
        <Container>
            <TopSide>
                <LeftSide>
                    <Title>{title}</Title>
                </LeftSide>
                <RightSide>
                    {
                        techStack.map((val)=>{
                            return <H1>{val}</H1>
                        })
                    }
                </RightSide>
            </TopSide>
            <BottomSide>
                <ProjectImage src={image} alt="websiteimage"/>
            </BottomSide>
            <A href={links.demo} target={"_blank"} rel="noreferrer">Demo</A>
            <A href={links.github} target={"_blank"} rel="noreferrer" style={{left:"48px"}}>Github</A>
        </Container>
    </>
  )
}