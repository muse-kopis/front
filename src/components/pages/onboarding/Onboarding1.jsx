import styled from "styled-components"
import { Button, Div, Input, Text } from "../../common/div"
import { GRAY1 } from "../../../constants/color";

const StyledInput = styled(Input)`
  height: 50px;
  background-color: ${GRAY1};
  border-radius: 10px;
  font-size: 14px;
`;

const Onboarding1 = ({ username, setUsername, setStep }) => {
  const buttonDisabled = username.length === 0 || username.length > 10;

  return (
    <Div>
      <Text $align='start' $size={16} $weight='MEDIUM' style={{ whiteSpace: 'pre-line' }}>
        {`반가워요! \n 앞으로 어떻게 불러드릴까요?`}
      </Text>
      <Div $margin='72px 0 0' $flex={true} $direction='column' $align='start'>
        <Text $align='start' $margin='0 0 14px' $size={12}>닉네임</Text>
        <StyledInput 
          placeholder="10자 이내, 한글 또는 영문으로 작성"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button 
          disabled={buttonDisabled} 
          $weight='BOLD' 
          $margin='24px 0 0' 
          $width='95px' 
          style={{ alignSelf: 'end'}}
          onClick={() => setStep(2)}
        >
          다음
        </Button>
      </Div>
    </Div>
  )
}

export default Onboarding1;