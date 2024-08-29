import React from "react";
import styled from "styled-components";
import { EmptyTicketBook } from "../../../assets/icons";
import { GRAY4, NAVY, WHITE } from "../../../constants/color";
import { Button, Div, Text } from "../../common/div";
import { useNavigate } from "react-router-dom";

const ListButton = styled(Button)`
  background-color: ${NAVY};
  color: ${WHITE};
  font-weight: 700;
  padding: 12px 20px;
  font-size: 12px;
  margin-top: 16px;
  border-radius: 30px;
`;

const EmptyTicketBookList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  }

  return (
    <Div $flex={true} $direction='column' $margin='160px 0 0'>
      <EmptyTicketBook />
      <Text $weight='BOLD' $margin='26px 0 8px'>기록된 공연이 없어요</Text>
      <Text $size={12} $color={GRAY4}>내가 본 공연을 티켓북으로 남겨 추억해보세요</Text>
      <ListButton onClick={handleClick}>
        공연 기록하고 티켓북 만들기
      </ListButton>
    </Div>
  )
}

export default EmptyTicketBookList;