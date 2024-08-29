import { Button, Div, Text } from "../../common/div";
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledImage = styled.img`
  ${({ $idx }) => $idx === 1 && ` margin-top: 20px;`}
  ${({ $idx }) => $idx === 3 && ` margin-top: 44px;`}
  ${({ $idx }) => $idx === 3 && ` margin-top: 24px;`}
`;

const OnboardingEnd = ({ settings, goMain }) => {
  return (
    <Div $flex={true} $direction='column' $padding='0 18px' $justify='center'>
      <Text $size={18} $weight='SEMIBOLD' $lineHeight='1.7' $margin='60px 0 0' style={{ whiteSpace: 'pre-line' }}>
        취향에 맞는 뮤지컬 작품을 추천받고,{'\n'}
        감동적인 순간은 기록으로 남겨 간직해보세요
      </Text>
      <Div $width='510px' $height='204px' $cursor='pointer' $margin='96px 0 0'> 
        <Slider {...settings}>
          <StyledImage $idx={1} src='/assets/ticketbook1.png' alt='onboarding-end' />
          <StyledImage $idx={2} src='/assets/ticketbook2.png' alt='onboarding-end' />
          <StyledImage $idx={3} src='/assets/ticketbook3.png' alt='onboarding-end' />
          <StyledImage $idx={4} src='/assets/ticketbook4.png' alt='onboarding-end' />
        </Slider>  
      </Div>
      <Button 
        $width='100%' 
        $height='65px' 
        $size={18} 
        $margin='100px 0 0'
        onClick={goMain}
      >
        내 취향인 뮤지컬 둘러보러 가기
      </Button>
    </Div>
  )
};

export default OnboardingEnd;
