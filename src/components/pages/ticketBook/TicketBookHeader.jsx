import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { CreateTicketIcon, ShareIcon } from "../../../assets/icons";
import Toggle from "./Toggle";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

const Container = styled(Div)`
  position: fixed;
  display: flex;
  padding: 14px 18px 10px;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  flex-direction: column;
  align-items: space-between;
`;

const TicketBookHeader = ({ shareLink, handleShare, setIsBook, isBook }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/');
  }

  const handleCreateTicket = () => {
    navigation('/search');
  }

  return (
    <Container>
      <Div $flex={true} $justify='space-between' $width='100%'>
        <Text $size={18} $font='Lobster' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>
          MUSEE
        </Text>
        <Div $grow='0' $gap='18px' $flex={true}>
          <CopyToClipboard text={shareLink} onCopy={handleShare} >
            <ShareIcon style={{ cursor: 'pointer' }} />
          </CopyToClipboard>
          <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
        </Div>
      </Div>
      <Div $flex={true} $justify='space-between' $width='100%' $margin='16px 0 0'>
        <Toggle
          isBook={isBook}
          setIsBook={setIsBook}         
        />
      </Div>
    </Container>
  )
}

export default TicketBookHeader;
