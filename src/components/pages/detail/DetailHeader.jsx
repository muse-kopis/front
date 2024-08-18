import { useNavigate } from "react-router-dom";
import { Div } from "../../common/div";
import { BackIcon, CreateTicketIcon } from "../../../assets/icons";

const DetailHeader = () => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  const handleCreateTicket = () => {
    navigation('/createTicket');
  }

  return (
    <Div $height='47px' $flex={true} $padding='0 18px' $justify='space-between'>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer'}} />
      <CreateTicketIcon onClick={handleCreateTicket} style={{cursor: 'pointer'}} />
    </Div>
  )
}

export default DetailHeader;
