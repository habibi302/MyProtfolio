import React,{useState} from 'react'
import {Nav,NavButton, BrandName, FirstPart, SecondPart, Menus, List, Item, Link, A, Contacts, Icon, Text, MobileMenu, DesktopMenu, MBrandName, Dots} from "./styles/header.styles";

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';


export default function Header() {

    const [navOpen, setNav] = useState(false);
    const [navIcon, setNavIcon] = useState(faBars);

    const handleClick = ()=>{
        setNav(!navOpen);
        if(navOpen){
            setNavIcon(faBars);
        }else{
            setNavIcon(faXmark);
        }
    }


  return (
    <Nav>
    <MBrandName onClick={()=>{if(navOpen){handleClick()}}}>
        <FirstPart>Habibur</FirstPart>
        <SecondPart>Rahman</SecondPart>
    </MBrandName>
    <NavButton icon={navIcon} onClick={handleClick} />
       <MobileMenu open={navOpen}>
            <Menus>
                <List>
                    <Item><Link to='home' spy={true} smooth={true} offset={50} duration={250}>Home</Link></Item>
                    <Item><Link to='services' spy={true} smooth={true} offset={50} duration={500}>Services</Link></Item>
                    <Item><Link to='works' spy={true} smooth={true} offset={50} duration={1000}>Works</Link></Item>
                    <Item><Link to='contact' spy={true} smooth={true} offset={50} duration={1500}>Contacts</Link></Item>
                </List>
            </Menus>
            <Dots/>
            <Contacts>
                <List>
                    <Item>
                        <A href="https://twitter.com/Habibur17210664" target={"_blank"}>
                            <Icon icon={faTwitter}/>
                            <Text  span>Twiterr</Text>
                        </A>
                    </Item>
                    <Item>
                        <A href="https://github.com/habibi302" target={"_blank"}>
                            <Icon icon={faGithub}/>
                            <Text>Github</Text>
                        </A>
                    </Item>
                    <Item>
                        <A href="mailto:techstodgy@gmail.com" target={"_blank"}>
                            <Icon icon={faEnvelope}/>
                            <Text>Gmail</Text>
                        </A>
                    </Item>
                </List>
            </Contacts>
       </MobileMenu>

       <DesktopMenu>
        <BrandName>
                <FirstPart>Habibur</FirstPart>
                <SecondPart>Rahman</SecondPart>
            </BrandName>
            <Menus>
                <List>
                    <Item><Link to='home' spy={true} smooth={true} offset={50} duration={250}>Home</Link></Item>
                    <Item><Link to='services' spy={true} smooth={true} offset={50} duration={500}>Services</Link></Item>
                    <Item><Link to='works' spy={true} smooth={true} offset={50} duration={1000}>Works</Link></Item>
                    <Item><Link to='contact' spy={true} smooth={true} offset={50} duration={1500}>Contacts</Link></Item>
                </List>
            </Menus>
            <Contacts>
                <List>
                    <Item>
                        <A href="https://twitter.com/Habibur17210664" target={"_blank"}>
                            <Icon icon={faTwitter}/>
                            <Text  span>Twiterr</Text>
                        </A>
                    </Item>
                    <Item>
                        <A href="https://github.com/habibi302" target={"_blank"}>
                            <Icon icon={faGithub}/>
                            <Text>Github</Text>
                        </A>
                    </Item>
                    <Item>
                        <A href="mailto:techstodgy@gmail.com" target={"_blank"}>
                            <Icon icon={faEnvelope}/>
                            <Text>Gmail</Text>
                        </A>
                    </Item>
                </List>
            </Contacts>
       </DesktopMenu>
    </Nav>
  )
}
