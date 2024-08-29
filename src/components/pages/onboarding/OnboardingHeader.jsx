import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div } from "../../common/div";
import { BackIcon } from "../../../assets/icons";
import { GRAY2, NAVY } from "../../../constants/color";

const Container = styled(Div)`
  height: 47px;
  display: flex;
  justify-content: center;
  padding: 0 18px;
  background-color: white;
  width: 100%;
`;

const Progress = styled(Div)`
  width: 100%;
  background-color: ${GRAY2};
  height: 5px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 10px 0 36px;
`;

const ProgressBar = styled.div`
  width: ${({ $value }) => $value}%;
  height: 100%;
  border-radius: 5px;
  background-color: ${NAVY};
  transition: width 0.5s;
`;

const OnboardingHeader = ({ step, setStep }) => {
  const navigation = useNavigate();

  const handleBack = () => {
    if (step === 1) {
      navigation(-1);
      return;
    } else {
      setStep(step - 1);
    }
  }

  return (
    <Container>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer', position: 'absolute', left: 18}} />
      <Progress>
        <ProgressBar $value={step * 25} />
      </Progress>
    </Container>
  )
}

export default OnboardingHeader;
