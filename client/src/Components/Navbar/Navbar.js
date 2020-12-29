// External modules
import React from 'react';
import styled from 'styled-components';

// Internal modules
import LogoWords from './Logo';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger/Hamburger';

const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 96px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Navbar = (props) => {
    return (
        <NavContainer>
            <LogoWords />
            <NavLinks />
            <Hamburger />
        </NavContainer>
    );
};

export default Navbar;
