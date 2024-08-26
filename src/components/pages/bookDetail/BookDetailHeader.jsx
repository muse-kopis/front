import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BackIcon } from "../../../assets/icons";
import { DeleteIcon, EditIcon } from "../../../assets/ticketbook";

const BookDetailHeader = () => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  return (
    <Div $height='47px' $flex={true} $padding='0 18px' $justify='center'>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer', marginRight: 'auto'}} />
      <Text $size={14} $weight='MEDIUM'>티켓북</Text>
      <Div style={{ marginLeft: 'auto'}} $grow='0' $gap='14px' $flex={true}>
        <EditIcon 
          style={{cursor: 'pointer'}} 
        />
        <DeleteIcon 
          style={{cursor: 'pointer'}} 
        />
      </Div>
    </Div>
  )
}

export default BookDetailHeader;