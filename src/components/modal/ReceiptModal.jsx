import React from "react";
import styled from "styled-components";
import { ReceiptSmallImage } from "../../assets/ticketbook";
import { Div, Text } from "../common/div";
import { StarBigIcon, EmptyStarBigIcon } from "../../assets/ticketbook";
import Modal from "./Modal";

const Container = styled.div`
  height: 566px;
  width: 338px;
  margin-top: 110px;
  background-image: url(${ReceiptSmallImage});
  background-size: cover;
  background-position: center;
  margin-left: auto;
`;

const TitleContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  gap: 4.5px;
  align-items: start;
  position: absolute;
  top: 102px;
  left: 78px;
`;

const StarContainer = styled(Div)`
  position: absolute;
  bottom: 188px;
  left: 87px;
  display: flex;
  gap: 4px;
`;

const ReceiptModal = () => {
  return (
    <Modal>
      <Container >
        <TitleContainer>
          <Text $size={10} $align='start'>
            2024. 08. 24
          </Text>
          <Text $size={10} $align='start'>
            제목제목
          </Text>
          <Text $size={10} $align='start'>
            시어터
          </Text>
          <Text $size={10} $align='start'>
            출연진1 ..
          </Text>
        </TitleContainer>
        <Text $width='228px' $height='132px' $size={12} $align='start' $whiteSpace='wrap' style={{position: 'absolute', top: '202px', left: '35px'}}>
          너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 그래서 너무너무 좋았따.너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다.  너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 
        </Text>
        <StarContainer>
          <StarBigIcon />
          <StarBigIcon />
          <StarBigIcon />
          <StarBigIcon />
          <EmptyStarBigIcon />
        </StarContainer>
      </Container>
      <Text $size={12} style={{ cursor: 'pointer'}}>닫기</Text>
    </Modal>
  )
}

export default ReceiptModal;
