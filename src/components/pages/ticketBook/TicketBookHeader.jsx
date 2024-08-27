import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { CreateTicketIcon } from "../../../assets/icons";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  padding: 0 18px;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const TicketBookHeader = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/');
  }

  const handleCreateTicket = () => {
    navigation('/search');
  }

  return (
    <Container>
      <Text $size={18} $font='Unbounded' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>MUSEE</Text>
      <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
    </Container>
  )
}

export default TicketBookHeader;
