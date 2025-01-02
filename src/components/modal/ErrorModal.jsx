import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text } from "../common/div";
import { GRAY1, BLACK } from "../../constants/color";

const Container = styled.div`
  width: 215px;
  padding: 22px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 30px;
  line-height: 30px;
  padding: 0;
`;

export const ErrorModal = ({ isOpen, closeModal, handleRetry }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true}>
      <Container>
        <Text $weight='BOLD'>
          오류가 발생했습니다.
        </Text>
        <Text $weight='BOLD'>
          다시 시도해주세요.
        </Text>
        <Div $flex={true} $gap='5px' $margin='24px 0 0'>
          <StyledButton 
            $backgroundColor={GRAY1} 
            $color={BLACK}
            onClick={closeModal}
          >
            처음으로
          </StyledButton>
          <StyledButton 
            onClick={handleRetry}
          >
            재시도
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}
