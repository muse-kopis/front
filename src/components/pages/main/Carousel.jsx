import React from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { CURATION_FEED } from "../../../constants/content";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Image = styled.img`
  width: 100%;
  height: 132px;
  border-radius: 10px;
  object-fit: cover;
`;  

const Carousel = ({ type, data, goDetail }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
  };

  const handleClick = (performanceId) => {
    goDetail(performanceId);
  }

  return(
    <Div $flex={true} $direction='column' $align='start' $width='100%' $overflow='hidden'>
      <Text $size={16} $weight='SEMIBOLD' $margin='0 0 7px 0'>
        {CURATION_FEED[type].title}
      </Text>
      <Div $width='100%' $overflow='hidden'>
        <Slider {...settings}>
          {data && data.map((performance, index) => (
            <Div 
              $padding='0 12px 0 0' 
              $cursor={true} 
              key={index}
              onClick={() => handleClick(performance.id)}
            >
              <Div $cursor={true} $height='153px'>
                <Image src={performance.poster}  />
                <Text $align='start' $margin='7px 0 0' $size={12} $weight='MEDIUM'>
                  {performance.performanceName}
                </Text>
              </Div>
            </Div>
          ))}
        </Slider>
      </Div>
    </Div>
  )
}

export default Carousel;