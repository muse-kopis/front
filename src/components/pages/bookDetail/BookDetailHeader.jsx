import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BackIcon } from "../../../assets/icons";
import { DeleteIcon, EditIcon } from "../../../assets/ticketbook";
import { GRAY1 } from "../../../constants/color";

const Container = styled(Div)`
  position: fixed;
  height: 47px;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  background-color: ${GRAY1};
  width: 100%;
  z-index: 1;
`;

const Title = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const BookDetailHeader = ({ goEdit, data, modal, setModal, isShared = false }) => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  return (
    <Container>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer'}} />
      <Title $weight='MEDIUM'>티켓북</Title>
      {!isShared && (
        <Div $grow='0' $gap='14px' $flex={true}>
          <EditIcon 
            onClick={() => goEdit(data)}
            style={{cursor: 'pointer'}} 
          />
          <DeleteIcon 
            onClick={() => setModal({ ...modal, delete: true })}
            style={{cursor: 'pointer'}} 
          />
        </Div>
      )}

    </Container>
  )
}

export default BookDetailHeader;
