import React from 'react';
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Container, TopSide, LeftSide, H1, Span, LBottomSide,
  FirstPart, LastPart, BrandName, CopyRight, RightSide, P, H4, H2,
  MiddleSide, List, Item, RBottomSide, Icon, A, Link} from '../../styles/contact.styles';


export default function Contact() {
  return (
    <>
        <Container id='contact'>
            <LeftSide>
                <TopSide>
                    <H1>Let's make something amazing<br/>together.</H1>
                    <H1>Start by <Span>saying hi</Span></H1>
                </TopSide>

                <LBottomSide>
                    <BrandName>
                        <FirstPart>Habibur</FirstPart><LastPart>Rahman</LastPart>
                    </BrandName>
                    <CopyRight>
                        <p>&copy; 2022. All Rights Reserved</p>
                    </CopyRight>
                </LBottomSide>
            </LeftSide>
            
            <RightSide>
                <TopSide>
                    <P>Information</P>
                    <H4>659/2, Dhaka 1216</H4>
                    <H2>techstodgy@gmail.com</H2>
                </TopSide>
                <MiddleSide>
                    <List>
                        <Item><Link to='home' spy={true} smooth={true} offset={50} duration={1500}>Home</Link></Item>
                        <Item><Link to='services' spy={true} smooth={true} offset={50} duration={1000}>Services</Link></Item>
                        <Item><Link to='works' spy={true} smooth={true} offset={50} duration={500}>Works</Link></Item>
                        <Item><Link to='contact' spy={true} smooth={true} offset={50} duration={250}>Contacts</Link></Item>
                    </List>
                </MiddleSide>
                <RBottomSide>
                    <A href="https://www.facebook.com/habibur302" target={"_blank"}><Icon icon={faFacebook}/></A>
                    <A href="https://twitter.com/Habibur17210664"  target={"_blank"}><Icon icon={faTwitter}/></A>
                    <A href="https://www.instagram.com/habi_bur__rah_man/"  target={"_blank"}><Icon icon={faInstagram}/></A>
                    <A href="https://github.com/habibi302"  target={"_blank"}><Icon icon={faGithub}/></A>
                </RBottomSide>
            </RightSide>
        </Container>
    </>
  )
}

