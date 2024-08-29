import React from "react";
import styled from "styled-components";
import TicketBookList from "../components/pages/ticketBook/TicketBookList";
import Navigation from "../components/common/Navigation";
import { Div, Text } from "../components/common/div";
import { useShare } from "../hooks/SharedHooks";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  padding: 0 18px;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const SharedBook = () => {
  const {
    user,
    datas,
    fetchPosterImage,
    goTicketBookDetail,
  } = useShare();

  return (
    <>
      <Container>
        <Text $align='start' $width='100%' $size={16}>
          <b>{user}</b>님의 티켓북 🔖
        </Text>
      </Container>
      <TicketBookList
        isShared={true}
        datas={datas}
        getPoster={fetchPosterImage}
        goDetail={goTicketBookDetail}
      />
      <Navigation />
    </>
  )
}

export default SharedBook;