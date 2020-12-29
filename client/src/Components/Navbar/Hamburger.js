// External modules
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 50px;
    height: 80px;
    display: none;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
        width: 70px;
        position: absolute;
        right: 0;
    }
`;

const LineOne = styled.div`
    width: 80%;
    height: 2px;
    background-color: #fff;
    position: ${props => props.click ? 'absolute' : 'relative'};
    transform: rotate(${props => props.click ? '45deg' : '0'});
    transition: transform 0.2s;
    pointer-events: none;
`;

const LineTwo = styled.div`
    width: 80%;
    height: 2px;
    background-color: #fff;
    opacity: ${props => props.click ? '0' : '1' };
    pointer-events: none;
    transition: all 0.2s;
`;

const LineThree = styled.div`
    width: 80%;
    height: 2px;
    position: ${props => props.click ? 'absolute' : 'relative'};
    background-color: #fff;
    transform: rotate(${props => props.click ? '-45deg' : '0'});
    transition: transform 0.2s;
    pointer-events: none;
`;

/** Placed below line components in order to reference them in hover **/
const HamburgerContainer = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    
    &:hover ${LineOne} {
        background-color: #D0CCD0;
    }

    &:hover ${LineTwo} {
        background-color: #D0CCD0;
    }

    &:hover ${LineThree} {
        background-color: #D0CCD0;
    }
`;

const NavItemContainer = styled.div`
    width: 100vw;
    min-height: 100px;
    display: ${props => props.click ? 'flex' : 'none' };
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
        color: #D0CCD0;
    }
`;

const Hamburger = (props) => {
    const [click, setClick] = useState(false);
    return(
        <Container>
            <HamburgerContainer onClick={() => setClick(!click)}>
                <LineOne click={click}></LineOne>
                <LineTwo click={click}></LineTwo>
                <LineThree click={click}></LineThree>
            </HamburgerContainer>
            <NavItemContainer click={click}>
                <NavItem href='/news'>News</NavItem>
                <NavItem href='/leaderboard'>Leaderboard</NavItem>
                <NavItem href='/profile'>Profile</NavItem>
            </NavItemContainer>
        </Container>
    );
}

export default Hamburger;