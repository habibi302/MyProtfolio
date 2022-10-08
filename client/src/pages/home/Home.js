import React from 'react'
import myPhoto from "../../assests/images/my-pic.png";
import { faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';
import { ChatWithMe, Circle, Container, Dot, Experiences, HomePage, LeftSide, MyDesc, MyPhoto, MySlogan, MyTitle, NodeJs, NodeJsIcon, ReactJs, ReactJsIcon, RightSide, WorksAndExp, Works, Years, YearsDesc } from '../../styles/home.styles';
import {Services, Works as WorksPage, Contact} from '../../pages';
import { Header } from '../../core-ui';

export default function Home() {
  return (
    <>
        <Header/>
        <HomePage id='home'>
          <Container>
            <LeftSide>
              <MyTitle>Full-Stack Developer</MyTitle>
              <MySlogan>Your creative <br/>web development partner.</MySlogan>
              <MyDesc>I am a full-stack developer, I design and development a full-stack app perfectly. And I love what I do</MyDesc>
              <ChatWithMe>Let's Chat!</ChatWithMe>
              <WorksAndExp>
                <Experiences>
                  <Years>2</Years>
                  <YearsDesc>Working<br/> Experience</YearsDesc>
                </Experiences>
                <Works>
                  <Years>4</Years>
                  <YearsDesc>Project Completed<br/> For Myself</YearsDesc>
                </Works>
              </WorksAndExp>  
            </LeftSide>
            <RightSide>
              <Circle/>
              <NodeJs>
                <NodeJsIcon icon={faNodeJs}/>
              </NodeJs>
              <ReactJs>
                <ReactJsIcon icon={faReact}/>
              </ReactJs>
              <Dot/>
              <MyPhoto src={myPhoto} alt="myphoto"/>
            </RightSide>
          </Container>
        </HomePage>

        <Services/>

        <WorksPage/>

        <Contact/>
    </>
  )
}
