import React, { useState } from "react";
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

const ImageCarousel = ({ photos = [] }) => {
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
    nextArrow: currentSlide+1 === photos.length ? null : <NextArrow />,
    prevArrow: currentSlide === 0 ? null : <PrevArrow />
  };

  return(
    <>
      <Text $size={12} $color={GRAY5} $margin='0 0 50px'>
        {currentSlide+1}/{photos.length}
      </Text>
      <Slider {...settings}>
        {photos?.map((photo, index) => (
          <Div key={index}>
            <Div $cursor={true} $flex={true} $justify='center'>
              <Image src={photo.url} />
            </Div>
          </Div>
        ))}
      </Slider>
    </>
  )
}

export default ImageCarousel;