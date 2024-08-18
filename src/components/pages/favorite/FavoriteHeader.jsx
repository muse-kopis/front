import { useNavigate } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BackIcon } from "../../../assets/icons";

const FavoriteHeader = () => {
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  }

  return (
    <Div $height='47px' $flex={true} $padding='0 18px' $justify='center'>
      <BackIcon onClick={handleBack} style={{cursor: 'pointer', position: 'absolute', left: 18}} />
      <Text $align='center' $weight='MEDIUM'>저장한 작품</Text>
    </Div>
  )
}

export default FavoriteHeader;
