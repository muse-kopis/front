import React from "react";
import styled from "styled-components";
import { BarcodeImage, TicketSlotImage } from "../../../assets/ticketbook";

const Container = styled.div`
  height: 94px;
  width: 205px;
  position: absolute;
  left: 57px;
  bottom: 46px;
  flex-shrink: 0;
  cursor: pointer;
`;

const TicketContainer = styled.div`
  height: 193px;
  width: 84px;
  transform: rotate(-90deg);
  transform-origin: center;
  left: 61px;
  top: -50px;
`;

const TicketPoster = styled.div`
  display: flex;
  width: 83.811px;
  height: 148.886px;
  padding-right: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Barcode = styled.div`
  width: 84px;
  height: 44px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $background }) => $background && `background-color: ${$background}`};
`;

const Poster = styled.img`
  width: 83.811px;
  height: 148.886px;
  flex-shrink: 0;
  border-radius: 5px;
`;

const TicketSlot = styled.img`
  width: 205px;
  height: 94px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  flex-shrink: 0;
`;

const Ticket = ({ data, color, openModal }) => {
  return (
    <Container onClick={openModal}>
      <TicketContainer>
        <TicketPoster>
          <Poster 
            src={data?.poster}
          />
        </TicketPoster>
        <Barcode $background={color}>
          <img 
            src={BarcodeImage} 
            alt='barcode'
            style={{ width: '72px', height: '32px', borderRadius: 0}} 
          />
        </Barcode>
      </TicketContainer>
      <TicketSlot 
        src={TicketSlotImage}
        alt='ticketSlot'
      />
    </Container>

  )
}

export default Ticket;