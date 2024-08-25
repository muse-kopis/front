import React from "react";
import styled from "styled-components";
import { BarcodeBigImage, BarcodeCover } from "../../assets/ticketbook";
import useColorThief from 'use-color-thief';
import PosterTemp from '../../assets/PosterTemp.jpeg';
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

const TicketModal = () => {
  const source = PosterTemp;

  const { color } = useColorThief(source, {
    format: 'hex',
    colorCount: 10,
    quality: 10,
  });

  return (
    <Modal>
      <Container >
        <TicketPoster>
          <Poster 
            src={source}
          />
        </TicketPoster>
        <Barcode>
          <BarcodeCover color={color} />
          <StyledBarcode />
        </Barcode>
      </Container>
      <Text $size={12} $margin='20px 0 0' style={{ cursor: 'pointer'}}>닫기</Text>
    </Modal>
  )
}

export default TicketModal;
