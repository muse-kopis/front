import React from "react";
import styled from "styled-components";
import { BarcodeBigImage, BarcodeCover } from "../../assets/ticketbook";
import Modal from "./Modal";
import { Text } from "../common/div";

const Container = styled.div`
  height: 422px;
  width: 210px;
  margin-top: 110px;
`;

const TicketPoster = styled.div`
  display: flex;
  width: 100%;
  height: 326px;
`;

const Barcode = styled.div`
  width: 100%;
  height: 96px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: -1px;
  ${({ $background }) => $background && `background-color: ${$background}`};
`;

const StyledBarcode = styled(BarcodeBigImage)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);   
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const TicketModal = ({ isOpen, closeModal,color,  data }) => {
  return (
    <Modal $isOpen={isOpen}>
      <Container >
        <TicketPoster>
          <Poster 
            src={data?.poster}
          />
        </TicketPoster>
        <Barcode>
          <BarcodeCover color={color} />
          <StyledBarcode />
        </Barcode>
      </Container>
      <Text $size={12} $margin='20px 0 0' style={{ cursor: 'pointer'}} onClick={closeModal}>
        닫기
      </Text>
    </Modal>
  )
}

export default TicketModal;
