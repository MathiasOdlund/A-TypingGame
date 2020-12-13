// External modules
import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121520;
`;

const SignupFormContainer = styled.div`
    width: 960px;
    height: 680px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignupForm = styled.form`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 54px;
    color: #F9C846;
`;

const InputField = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: rgb(29, 34, 52, 0.4);
    margin-bottom: 10px;
    padding-left: 25px;
    outline: none;
    font-size: 16px;
    
    &:nth-child(2n) {
        border: 1px solid #F2545B;
        caret-color: #F2545B;
        color: #F2545B;
    }
    
    &:nth-child(2n + 1) {
        border: 1px solid #70D6FF;
        caret-color: #70D6FF;
        color: #70D6FF;
    }

    &:focus {
        border-width: 3px;
        background: transparent;
    }
`;

const Submit = styled.input`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 25px;
    outline: none;
    border: 1px solid #81e979;
    color: #81e979;
    background-color: transparent;

    &:hover {
        background-color: #81e979;
        color: #121520;
    }

    &:focus {
        background-color: #59E250;
    }
`;

const Signup = (props) => {
    return(
        <SignupContainer>
            <SignupFormContainer>
                <SignupForm action='/signup' method='post'>
                    <Title>Signup</Title>
                    <InputField type='email' name='email' autoComplete='off' />
                    <InputField type='text' name='password' autoComplete='off'/>
                    <Submit type='submit' value='Submit'/>
                </SignupForm>
            </SignupFormContainer>
        </SignupContainer>
    );
}

export default Signup;