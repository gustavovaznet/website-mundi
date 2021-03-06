//NAVBAR

//IMPORTING
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';
import logoImg from '../images/logo.png'
import * as Scroll from 'react-scroll';

//NAV
const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ navBg }) => (navBg ? '#242424' : 'transparent')};
  transition: 1s;
`;

//NAV LINK
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

//LOGO
const Logo = styled(Link)`
  ${NavLink}
  font-style:italic;
`;

//MENU BARS
const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

//NAV MENU
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//NAV MENU LINKS
const NavMenuLinks = styled(Scroll.Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//NAVBAR
const Navbar = ({ toggle }) => {
  const [navBg, setNavBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  //RETURN
  return (
    <Nav navBg={navBg}>
      <img src={logoImg} alt="logo" />
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            spy={true}
            smooth={true}
            offset={item.link !== '/homes' ? 30 : 0}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contato
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
