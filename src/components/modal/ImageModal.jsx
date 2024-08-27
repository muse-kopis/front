import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { Text } from "../common/div";
import ImageCarousel from "../pages/bookDetail/ImageCarousel";

const Container = styled.div`
  margin-top: 110px;
  width: 100%;
  padding: 0 48px;
`;

const ImageModal = ({ isOpen, closeModal, data }) => {
  return (
    <Modal $isOpen={isOpen}>
      <Container>
        <ImageCarousel
          photos={data?.photos}
        />
      </Container>
      <Text 
        $size={12} 
        $margin='20px 0 0' 
        style={{ cursor: 'pointer'}} 
        onClick={closeModal}
      >
        닫기
      </Text>
    </Modal>
  )
}

export default ImageModal;
