import React from "react";
import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter an email address of the user you wish to chat with"
    );
    if (!input) return null;

    if (EmailValidator.validateEmail(input)) {
      // We need to add the chat into the DB 'CHATS' collection
      
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton style={{ color: "white" }}>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon style={{ color: "white" }} />
        <SearchInput placeholder="Search" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  background-color: black !important;
  color: white;
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  color: white !important;
  &&& {
    border-top: 0.2px solid grey;
    border-bottom: 0.2px solid grey;
  }
`;

const Header = styled.div`
  background-color: black !important;
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
