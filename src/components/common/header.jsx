import { useNavigate } from "react-router-dom";
import { Div, Text } from "./div";

const Header = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation('/');
  }

  return (
    <Div $height='47px' $flex={true} $justify='start' $padding='0 18px'>
      <Text $size={18} $font='Unbounded' $weight='MEDIUM' onClick={handleClick} style={{cursor: 'pointer'}}>MUSEE</Text>
    </Div>
  )
}

export default Header;
