import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text, Input } from "../common/div";
import { GRAY5, GRAY3, GRAY1, BLACK } from "../../constants/color";

const Container = styled.div`
  width: 215px;
  padding: 22px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const StyledInput = styled(Input)`
  border-radius: 4px;
  border: 0.5px solid ${GRAY5};
  height: 32px;
  margin-top: 17px;
  padding: 0 9px;
  &::placeholder {
    color: ${GRAY3};
  }
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 30px;
  line-height: 30px;
  padding: 0;
`;

export const NicknameEditModal = ({ isOpen, closeModal, handleNicknameEdit, setNickname, nickname, nicknameDisabled }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true}>
      <Container>
        <Text $weight='BOLD'>
          닉네임 수정
        </Text>
        <StyledInput 
          placeholder="10자 이내"
          maxLength={10}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Div $flex={true} $gap='5px' $margin='24px 0 0'>
          <StyledButton 
            $backgroundColor={GRAY1} 
            $color={BLACK}
            onClick={closeModal}
          >
            취소
          </StyledButton>
          <StyledButton 
            disabled={nicknameDisabled}
            onClick={handleNicknameEdit}
          >
            확인
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}
