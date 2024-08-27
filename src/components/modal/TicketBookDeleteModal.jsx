import React from "react";
import styled from "styled-components";
import { Button, Div, Text } from "../common/div";
import Modal from "./Modal";
import { BLACK, GRAY1 } from "../../constants/color";

const Container = styled.div`
  width: 215px;
  padding: 28px 0 16px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;

`;

const TicketBookDeleteModal = ({ isOpen = true, closeModal, handleDelete }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true}>
      <Container>
        <Text $weight='SEMIBOLD'>
          이 티켓북을 삭제하시겠어요?
        </Text>
        <Div $padding='0 22px' $flex={true} $gap='5px' $margin='24px 0 0'>
          <StyledButton 
            $backgroundColor={GRAY1} 
            $color={BLACK}
            onClick={closeModal}
          >
            취소
          </StyledButton>
          <StyledButton onClick={handleDelete}>
            삭제
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}

export default TicketBookDeleteModal;