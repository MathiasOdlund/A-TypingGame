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
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 54px;
  color: #f9c846;
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
    border: 1px solid #f2545b;
    caret-color: #f2545b;
    color: #f9c846;
  }

  &:nth-child(2n + 1) {
    border: 1px solid #f2545b;
    caret-color: #f2545b;
    color: #f9c846;
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
  border: 1px solid #f2545b;
  color: #f2545b;
  background-color: transparent;

  &:hover {
    border: 1px solid #f9c846;
    background-color: #f9c846;
    color: #121520;
  }

  &:focus {
    background-color: #59e250;
  }
`;
//If the user agrees with the tos / Term of Service
const TOSContainer = styled.div`
  display: flex;
`;

const AgreeWithTheTos = styled.input`
  margin-left: 20px;
  margin-top: 6px;
`;

const Label = styled.label`
  margin-left: 10px;
  color: #f9c846;

  span {
    color: #f2545b;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

const LoginDesc = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #f9c846;
`;

const LoginLink = styled.a`
  color: #f2545b;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f2545b;
  }
`;

/**
 * TODO:
 *
 */

const Signup = (props) => {
  return (
    <SignupContainer>
      <SignupFormContainer>
        <SignupForm action="/signup" method="post">
          <Title>Signup</Title>
          {/* See login container on comments for color scheme */}
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="on"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
          <TOSContainer>
            <AgreeWithTheTos type="checkbox" value="Agree"></AgreeWithTheTos>
            <Label>
              Agree with the <span>TOS?</span>
            </Label>
          </TOSContainer>
          <Submit type="submit" value="Submit" />
          <LoginDesc>
            Already have an account?
            <LoginLink href="/login"> Log in</LoginLink>
          </LoginDesc>
        </SignupForm>
      </SignupFormContainer>
    </SignupContainer>
  );
};

export default Signup;
