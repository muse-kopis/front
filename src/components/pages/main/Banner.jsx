import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { WHITE } from "../../../constants/color";
import img from '../../../assets/icons/BannerArrow.png';

const Container = styled(Div)`
  background: rgb(0,32,67);
  background: linear-gradient(90deg, rgba(0,32,67,1) 0%, rgba(0,82,169,1) 100%);
  height: 100px;
`;

const Banner = () => {
  const handleClick = () => {
    window.location.href = 'https://pf.kakao.com/_LxmcAn';
  }
  return(
    <Container 
      $flex={true} 
      $direction='column'
      $align='start'
      $padding='18px' 
      onClick={handleClick}
      $cursor={true}
    >
      <Text $color={WHITE} $size={16} $weight='LIGHT'>
        기다렸던 공연, 놓치지 않도록
      </Text>
      <Div $flex={true} $justify='space-between' $width='100%' $grow='0' $margin='8px 0 0'>
        <Text $color={WHITE} $size={16} $weight='SEMIBOLD'>
          예매 오픈 알림 신청하기
        </Text>
        <img src={img} alt="banner" />
      </Div>
    </Container>
  )
}

export default Banner;