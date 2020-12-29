// External modules
import React from 'react';
import styled from 'styled-components';

const NavItemContainer = styled.div`
    width: 100vw;
    min-height: 100px;
    display: ${(props) => (props.click ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 70px;
    border-radius: 4px;
    background-color: rgba(251, 252, 255, 0.09);
`;

const NavItem = styled.a`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        color: #d0ccd0;
    }
`;

const NavItems = (props) => {
    const { click } = props;
    return (
        <NavItemContainer click={click}>
            <NavItem href="/news">News</NavItem>
            <NavItem href="/leaderboard">Leaderboard</NavItem>
            <NavItem href="/profile">Profile</NavItem>
        </NavItemContainer>
    );
};

export default NavItems;
