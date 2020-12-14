// External modules
import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121520;
`;

const LoginFormContainer = styled.div`
  width: 960px;
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 300px;
  height: 400px;
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

const SignupDesc = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #f9c846;
`;

const SignupLink = styled.a`
    color: #f2545b;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #f2545b;
    }
`;

const Login = (props) => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginForm action="/login" method="post">
          <Title>Login</Title>
          {/* Might wanna deviate away from yellow. Realized that we are trying to be a copy of monkeytype... */}
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
          {/* I know I placed one of them as red before but now when I think of it, might wanna change that. Reasons below... see comments below submit */}
          <Submit type="submit" value="Submit" />
          {/* For submit states, red is not a good color as it is often associated with failure or rejection. Change to green or another non-reddish color*/}
          <SignupDesc>
            Don't have an account?
            <SignupLink href="/signup"> Sign up</SignupLink> 
          </SignupDesc>
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
