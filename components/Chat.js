import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);

  const recipientEmail = getRecipientEmail(users, user);
  console.log(recipientEmail);
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}
// 1:52:03

export default Chat;

const Container = styled.div`
  color: whitesmoke;
  display: flex;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  align-items: center;

  :hover {
    background-color: #252525;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
