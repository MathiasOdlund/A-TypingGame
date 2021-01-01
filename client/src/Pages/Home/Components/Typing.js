// External modules
import React from 'react';
import styled from 'styled-components';
const axios = require('axios').default;
//Internal modules

//Getting a random quote
const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
//using axios to get the quote
axios
    .get(RANDOM_QUOTE_API_URL)
    .then(function (response) {
        // handle success
        //console.log(response.data.content);
        document.getElementById('quote').innerHTML = response.data.content;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

const TypingContainer = styled.div`
    width: 100%;
    height: 100%;
`;
const InputContainer = styled.div`
    width: 80%;
    height: 60%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid red;
`;
const TextArea = styled.textarea`
    width: 900px;
    margin: auto;
    display: block;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 3px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;
const QuoteArea = styled.div`
    border: 2px solid red;
    width: 900px;
    margin: auto;
    height: 30%;
    position: relative;
    top: 50%;
    color: white;
    transform: translateY(-50%);
`;
const Typing = (props) => {
    return (
        <TypingContainer>
            <InputContainer>
                <QuoteArea id="quote"></QuoteArea>
                <TextArea />
            </InputContainer>
        </TypingContainer>
    );
};

export default Typing;
