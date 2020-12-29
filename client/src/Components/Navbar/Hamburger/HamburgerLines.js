// External modules
import React from 'react';
import styled from 'styled-components';

const LineOne = styled.div`
    width: 80%;
    height: 2px;
    background-color: #fff;
    position: ${(props) => (props.click ? 'absolute' : 'relative')};
    transform: rotate(${(props) => (props.click ? '45deg' : '0')});
    transition: transform 0.2s;
    pointer-events: none;
`;

const LineTwo = styled.div`
    width: 80%;
    height: 2px;
    background-color: #fff;
    opacity: ${(props) => (props.click ? '0' : '1')};
    pointer-events: none;
    transition: all 0.2s;
`;

const LineThree = styled.div`
    width: 80%;
    height: 2px;
    position: ${(props) => (props.click ? 'absolute' : 'relative')};
    background-color: #fff;
    transform: rotate(${(props) => (props.click ? '-45deg' : '0')});
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
        background-color: #d0ccd0;
    }

    &:hover ${LineTwo} {
        background-color: #d0ccd0;
    }

    &:hover ${LineThree} {
        background-color: #d0ccd0;
    }
`;

const HamburgerLines = (props) => {
    const { click, setClick } = props;
    return (
        <HamburgerContainer onClick={() => setClick(!click)}>
            <LineOne click={click}></LineOne>
            <LineTwo click={click}></LineTwo>
            <LineThree click={click}></LineThree>
        </HamburgerContainer>
    );
};

export default HamburgerLines;
