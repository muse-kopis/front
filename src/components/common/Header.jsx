import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "./div";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  justify-content: start;
  padding: 0 18px;
  background-color: white;
  width: 100%;
  z-index: 1;
`;

const Header = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/');
  }

  return (
    <Container>
      <Text $size={18} $font='Lobster' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>MUSEE</Text>
    </Container>
  )
}

export default Header;
