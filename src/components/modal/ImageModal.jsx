import React from "react";
import styled from "styled-components";
import { BarcodeBigImage, BarcodeCover } from "../../assets/ticketbook";
import useColorThief from 'use-color-thief';
import PosterTemp from '../../assets/PosterTemp.jpeg';
import Modal from "./Modal";
import { Text } from "../common/div";
import ImageCarousel from "../pages/bookDetail/ImageCarousel";

const Container = styled.div`
  margin-top: 110px;
  width: 100%;
  padding: 0 48px;
`;

const ImageModal = () => {
  return (
    <Modal>
      <Container className="ㅎㅇㅎㅇㅎㅇㅎㅎㅇ" >
        <ImageCarousel />
      </Container>
      <Text $size={12} $margin='20px 0 0' style={{ cursor: 'pointer'}}>닫기</Text>
    </Modal>
  )
}

export default ImageModal;
