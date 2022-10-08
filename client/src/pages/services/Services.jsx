import React from 'react'

import { faBezierCurve, faCode, faServer} from '@fortawesome/free-solid-svg-icons';

import {Container, LeftSide, SkillsCard, TitleDescIcon,
  TitleDesc, Title, Desc, Icon, ProjectDone,
  RightSide, Introduce, HelloText, SlogText, DescText} from "../../styles/services.styles";



export default function Services() {
  return (
    <>
            <Container  id='services'>
                <LeftSide>
                    <SkillsCard>
                        <TitleDescIcon>
                          <TitleDesc>
                              <Title>UI/UX Design</Title>
                              <Desc>Create UI/UX Design with unique ideas</Desc>
                          </TitleDesc>
                              <Icon icon={faBezierCurve}/>
                        </TitleDescIcon>
                        <ProjectDone>3 PROJECTS</ProjectDone>
                    </SkillsCard>

                    <SkillsCard>
                        <TitleDescIcon>
                            <TitleDesc>
                            <Title>Front-End</Title>
                            <Desc>I develop front-end with coding super smooth</Desc>
                            </TitleDesc>
                                <Icon icon={faCode}/>
                        </TitleDescIcon>
                        <ProjectDone>4 PROJECTS</ProjectDone>
                    </SkillsCard>

                    <SkillsCard>
                        <TitleDescIcon>
                            <TitleDesc>
                            <Title>Back-End</Title>
                            <Desc>I do back-end with coding super smooth</Desc>
                            </TitleDesc>
                                <Icon icon={faServer}/>
                        </TitleDescIcon>
                        <ProjectDone>4 PROJECTS</ProjectDone>
                    </SkillsCard>
                </LeftSide>


                <RightSide>
                    <Introduce>introduce</Introduce>
                    <HelloText>Hello! I am Habibur <br/> Rahman</HelloText>
                    <SlogText>Every great design begin with an <br/> even better story</SlogText>
                    <DescText>
                    I am a MERN stack web developer. I can develop both client or frontend and server
                     or backend web application. I used robust and powerful
                      technologies to develop scalable master web applications.
                       I also do ui/ux design for applications.
                        I'm quitely confident, naturally curious, and perpetually working on improving my 
                       programming problem at a time.
                    </DescText>
                </RightSide>
            </Container>
    </>
  )
}

