import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const HeaderNav = styled.nav`
  width:100%;
  min-height:5rem;
  color:white;
  display:flex;
  position:fixed;
  background-color:#453C70;
  top:0;
  left:0;
  justify-content:space-evenly;
  align-items:center;
  z-index: 100;
  padding-top: 5px;
`

const MenuDiv=styled.div`
  font-size:1.5rem;
  font-weight:bold;
`
const MenuSpan=styled.span`
  margin: 0 20px;
  &:hover{
    color:rgb(220, 52, 141);
  }
`
const NextDraw=styled.p`
  font-size:1.4rem;
  font-weight:bold;
  color:rgb(220, 52, 141);
`

const LogoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
  margin-bottom: 3px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/icon-nxdflogo.png");
`

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo=styled.h1`
  font-size:1.7rem;
  font-weight:700;
`
function Header() {
  return (
    <HeaderNav>
      <Link to="Main" spy={true} smooth={true} offset={-80}>
        <LogoDiv>
          <LogoIcon></LogoIcon>
          <Logo>NXDF LOTTO</Logo>
        </LogoDiv>
      </Link>
      <MenuDiv>
        <Link to="Buyers" spy={true} smooth={true} offset={-80}>
          <MenuSpan>Ticket Buyers</MenuSpan>
        </Link>
        <Link to="About" spy={true} smooth={true} offset={-80}>
          <MenuSpan>About us</MenuSpan>
        </Link>
        <Link to="winners" spy={true} smooth={true} offset={-80}>
          <MenuSpan>Winners</MenuSpan>
        </Link>
      </MenuDiv>
      <NextDraw>Next Draw Saturday 2:00 PM UTC</NextDraw>
    </HeaderNav>
  );
}

export default Header;