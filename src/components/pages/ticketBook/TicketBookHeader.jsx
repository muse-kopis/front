import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { CreateTicketIcon, ShareIcon } from "../../../assets/icons";

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

const TicketBookHeader = ({ handleShare }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/');
  }

  const handleCreateTicket = () => {
    navigation('/search');
  }

  return (
    <Container>
      <Text $size={18} $font='Unbounded' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>
        MUSEE
      </Text>
      <Div $grow='0' $gap='18px' $flex={true}>
        <ShareIcon onClick={handleShare} style={{ cursor: 'pointer' }} />
        <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
      </Div>
    </Container>
  )
}

export default TicketBookHeader;
