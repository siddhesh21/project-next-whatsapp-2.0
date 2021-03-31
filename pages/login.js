import styled from "styled-components";
import React from "react";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-GreenSquare-Logo.wine.svg" />
        <Button onClick={signIn} style={{ color: "white" }} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  /* background-color: black; */
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  border-radius: 5px;
  box-shadow: 0px 7px 21px -1px rgb(255, 255, 255);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
