import styled from "styled-components";
import { Div, Text } from "../components/common/div";
import { API_BASE } from "../api/base";
import Header from "../components/common/Header";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PwaGuide } from "../components/common/PwaGuide";

const Button = styled.button`
  border: none;
  font-weight: 600;
  cursor: pointer;
  position: sticky;
  bottom: 25px;
  width: calc(100% - 36px);
  left: 18px;
  border-radius: 30px;
  background-color: #FEE500;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 86px !important;
  height: 114px;
  border-radius: 3px;
`;

const StyledImage2 = styled.img`
  width: 101px !important;
  height: 131px;
  border-radius: 0px;
`;

const SlideContainer = styled(Div)`
  ${({ $height }) => $height && `height: ${$height};`}
  width: 465px;
  cursor: pointer;
  & .slick-slide {
    width: 94px !important;
  }
  ${({ $slide }) => $slide === 'last' && `
  width: 372px;
  margin-left: 18px;
  & .slick-slide {
     width: 104px !important;
  }
`}
`;

const Login = () => {

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 500,
  };

  const modifiedSettings = {
    ...carouselSettings,
    initialSlide: -0.6,
    slidesToShow: 3.6, 
  };
  
  const handleLogin = () => {
    window.location.href = API_BASE + '/oauth/kakao';
  }

  return (
    <>
      <Header />
      <Div $padding='96px 0 0' $width='100%' style={{ overflow: 'hidden'}}>
        <Text $font='Lobster' $margin='0 18px' $align='start' $size={20}>
          Muse Your Experience
        </Text>
        <Text $margin='16px 18px 21px' $align='start' style={{ whiteSpace: 'pre-line' }}>
          내 뮤지컬 취향을 분석해{'\n'}
          나만을 위한 맞춤형 작품 추천을 제공해요 🎵
        </Text>
        <SlideContainer $height='114px'> 
          <Slider {...carouselSettings}>
            <StyledImage src='/assets/loginTicketbook1.png' alt='onboarding-end' />
            <StyledImage src='/assets/loginTicketbook2.png' alt='onboarding-end' />
            <StyledImage src='/assets/loginTicketbook3.png' alt='onboarding-end' />
            <StyledImage src='/assets/loginTicketbook4.png' alt='onboarding-end' />
            <StyledImage src='/assets/loginTicketbook5.png' alt='onboarding-end' />
          </Slider>  
        </SlideContainer>
      </Div>
      <Div $margin='114px 0 0'>
        <Text $font='Lobster' $margin='0 18px' $align='end' $size={20}>
          Memories in Motion
        </Text>
        <Text $margin='16px 18px 0' $align='end' style={{ whiteSpace: 'pre-line' }}>
          뮤즈만의 특별한 티켓북에 공연을 기록하고{'\n'}
          오늘의 감동을 오래도록 추억해요
        </Text>
        <Div $margin='-20px 0 0' $padding='0 32px 0 26px'>
          <img src="/assets/loginMemories.png" alt="ticketbook" style={{ width: '100%'}} />
        </Div>
      </Div>
      <Div $margin='114px 0 0' $width='100%' style={{ overflow: 'hidden'}}>
        <Text $font='Lobster' $margin='0 18px' $align='start' $size={20}>
          Maximize Your Moments
        </Text>
        <Text $margin='16px 18px 21px' $align='start' style={{ whiteSpace: 'pre-line' }}>
          더 많은 티켓북 기록을 남길수록{'\n'}
          더 높은 등급의 티켓을 얻을 수 있어요✨
        </Text>
        <SlideContainer $height='131px' $slide='last' className="efefefefefef"> 
          <Slider {...modifiedSettings}>
            <StyledImage2 src='/assets/rank1st_mania.png' alt='onboarding-end' />
            <StyledImage2 src='/assets/rank2nd_lover.png' alt='onboarding-end' />
            <StyledImage2 src='/assets/rank3rd_newbie.png' alt='onboarding-end' />
            <StyledImage2 src='/assets/rank1st_mania.png' alt='onboarding-end' />
            <StyledImage2 src='/assets/rank2nd_lover.png' alt='onboarding-end' />
            <StyledImage2 src='/assets/rank3rd_newbie.png' alt='onboarding-end' />
          </Slider>  
        </SlideContainer>
      </Div>
      <Div $margin='90px 0 0' />
      <Button onClick={handleLogin}>
        <img src="/assets/kakao.png" alt="kakao" style={{ width: '20px', marginRight: '8px'}} />
        <Text>
          카카오 계정으로 3초만에 로그인
        </Text>
      </Button>  
      <PwaGuide />
    </>
  )
}

export default Login;


