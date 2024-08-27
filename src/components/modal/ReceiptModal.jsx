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

const Title = styled(Text)`
  font-size: 10px;
  text-align: start;
  max-width: 190px;
`;

const ReceiptModal = ({ isOpen, closeModal, data }) => {
  return (
    <Modal $isOpen={isOpen}>
      <Container >
        <TitleContainer>
          <Title>
            {data?.viewDate}
          </Title>
          <Title>
            {data?.performanceName}
          </Title>
          <Title>
            {data?.venue}
          </Title>
          <Title>
            {data?.reviewResponse?.castMembers}
          </Title>
        </TitleContainer>
        <Text $width='228px' $height='132px' $size={12} $align='start' $whiteSpace='wrap' style={{position: 'absolute', top: '202px', left: '35px'}}>
          {data?.reviewResponse?.content}
        </Text>
        <StarContainer>
          {Array.from({ length: data?.reviewResponse.star }, (_, i) => (
            <StarBigIcon key={i} />
          ))}
          {Array.from({ length: 5 - data?.reviewResponse.star }, (_, i) => (
            <EmptyStarBigIcon key={i} />
          ))}
        </StarContainer>
      </Container>
      <Text $size={12} style={{ cursor: 'pointer'}} onClick={closeModal}>
        닫기
      </Text>
    </Modal>
  )
}

export default ReceiptModal;
