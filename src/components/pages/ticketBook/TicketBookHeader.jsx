import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { CreateTicketIcon } from "../../../assets/icons";

const TicketBookHeader = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/');
  }

  const handleCreateTicket = () => {
    navigation('/search');
  }

  return (
    <Div $height='47px' $flex={true} $padding='0 18px' $justify='space-between'>
      <Text $size={18} $font='Unbounded' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>MUSEE</Text>
      <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
    </Div>
  )
}

export default TicketBookHeader;
