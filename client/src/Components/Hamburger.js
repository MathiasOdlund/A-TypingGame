// External modules
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 50px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
`;

const HamburgerContainer = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    border: 1px solid #fff;
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

const Hamburger = (props) => {
    const [click, setClick] = useState(false);
    return(
        <Container>
            <HamburgerContainer onClick={() => setClick(!click)}>
                <LineOne click={click}></LineOne>
                <LineTwo click={click}></LineTwo>
                <LineThree click={click}></LineThree>
            </HamburgerContainer>
        </Container>
    );
}

export default Hamburger;