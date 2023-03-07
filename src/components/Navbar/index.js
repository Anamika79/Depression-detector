import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, 
    NavLinks
        } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Mind Pill</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars /> 
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = "help">Help</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
