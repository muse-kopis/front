import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BackIcon } from "../../../assets/icons";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  justify-content: center;
  padding: 0 18px;
  background-color: white;
  width: 100%;
  z-index: 1;
`;

const CreateBookHeader = () => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  return (
    <Container>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer', position: 'absolute', left: 18}} />
      <Text $align='center' $weight='MEDIUM'>티켓북 만들기</Text>
    </Container>
  )
}

export default CreateBookHeader;
