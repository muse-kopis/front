import React from "react";
import styled from "styled-components";
import { FavoriteIcon } from "../../../assets/icons";
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

const EmptyFavoriteList = () => {
  const navigate = useNavigate();

  const goList = () => {
    navigate('/search');
  }

  return (
    <Div $flex={true} $direction='column' $margin='200px 0 0'>
      <FavoriteIcon />
      <Text $weight='BOLD' $margin='26px 0 8px'>저장한 공연이 없어요</Text>
      <Text $size={12} $color={GRAY4}>내 취향인 공연을 찾아 저장해보세요</Text>
      <ListButton onClick={goList}>공연 둘러보러 가기</ListButton>
    </Div>
  )
}

export default EmptyFavoriteList;