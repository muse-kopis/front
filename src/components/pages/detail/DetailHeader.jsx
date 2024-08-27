import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { Div } from "../../common/div";
import { BackIcon, CreateTicketIcon } from "../../../assets/icons";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  background-color: white;
  width: 100%;
  z-index: 1;
`;

const DetailHeader = ({ id }) => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  const handleCreateTicket = () => {
    navigation('/create-book/' + id);
  }

  return (
    <Container>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer'}} />
      <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
    </Container>
  )
}

export default DetailHeader;
