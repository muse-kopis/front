import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../constants/content";
import { Div } from "./div";
import { GRAY3 } from "../../constants/color";
import {  HomeIcon, MypageIcon, SearchIcon, TicketIcon } from "../../assets/icons";

const Container = styled(Div)`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  flex-grow: 1;
  height: 55px;
  border-top: solid 1px ${GRAY3};
  justify-content: space-evenly;
  display: flex;
  background-color: white;
`;

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

const Navigation = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  }

  return (
    <Container>
      <LinkButton to={URL.HOME}>
        <HomeIcon selected={isSelected(URL.HOME)} />
      </LinkButton>
      <LinkButton to={URL.SEARCH}>
        <SearchIcon selected={isSelected(URL.SEARCH)} />
      </LinkButton>
      <LinkButton to={URL.TICKET}>
        <TicketIcon selected={isSelected(URL.TICKET)} />
      </LinkButton>
      <LinkButton to={URL.MYPAGE}>
        <MypageIcon selected={isSelected(URL.MYPAGE)} />
      </LinkButton>
    </Container>
  )
}

export default Navigation;