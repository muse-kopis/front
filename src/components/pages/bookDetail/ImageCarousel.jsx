import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from "../../../assets/ticketbook";
import { GRAY5 } from "../../../constants/color";
import './Carousel.css';

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0;
  object-fit: cover;
`;  

const ImageCarousel = ({ type, content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    nextArrow: currentSlide === 2 ? null : <NextArrow />,
    prevArrow: currentSlide === 0 ? null : <PrevArrow />
  };

  useEffect(() => {
    console.log('current', currentSlide);
  }, [currentSlide])

  return(
    <>
      <Text $size={12} $color={GRAY5} $margin='0 0 50px'>{currentSlide+1}/3</Text>
      <Slider {...settings}>
        <Div>
          <Div $cursor={true} $flex={true} $justify='center'>
            <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
          </Div>
        </Div>
        <Div>
          <Div $cursor={true} $flex={true} $justify='center'>
            <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
          </Div>
        </Div>
        <Div>
          <Div $cursor={true} $flex={true} $justify='center'>
            <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
          </Div>
        </Div>
      </Slider>
    </>
  )
}

export default ImageCarousel;