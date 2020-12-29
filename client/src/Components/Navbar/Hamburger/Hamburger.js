// External modules
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal modules
import HamburgerLines from './HamburgerLines';
import NavItems from './NavItems';

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
`

const Hamburger = (props) => {
    const [click, setClick] = useState(false);
    return(
        <Container>
            <HamburgerLines click={click} setClick={setClick}/>
            <NavItems click={click}/>
        </Container>
    );
}

export default Hamburger;