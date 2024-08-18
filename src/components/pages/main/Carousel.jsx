import React, { useState } from "react";
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

const Carousel = ({ type, content }) => {
  const [isSliding, setIsSliding] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    // variableWidth: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
  };



  return(
    <Div $flex={true} $direction='column' $align='start' $width='100%' $overflow='hidden'>
      <Text $size={16} $weight='SEMIBOLD' $margin='0 0 7px 0'>
        규리{CURATION_FEED[type].title}
      </Text>
      <Div $width='100%' $overflow='hidden'>
        <Slider {...settings}>
          <Div $padding='0 12px 0 0' $cursor='pointer'>
            <Div $cursor={true} $height='153px'>
              <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
              <Text $align='start' $margin='7px 0 0' $size={12}>영웅</Text>
            </Div>
          </Div>
          <Div $padding='0 12px 0 0' $cursor='pointer'>
            <Div $cursor={true} $height='153px'>
              <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
              <Text $align='start' $margin='7px 0 0' $size={12}>영웅</Text>
            </Div>
          </Div>

          <Div $padding='0 12px 0 0' $cursor='pointer'>
            <Div $cursor={true} $height='153px'>
              <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
              <Text $align='start' $margin='7px 0 0' $size={12}>영웅</Text>
            </Div>
          </Div>
          <Div $padding='0 12px 0 0' $cursor='pointer'>
            <Div $cursor={true} $height='153px'>
              <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
              <Text $align='start' $margin='7px 0 0' $size={12}>영웅</Text>
            </Div>
          </Div>
          <Div $padding='0 12px 0 0' $cursor='pointer'>
            <Div $cursor={true} $height='153px'>
              <Image src='https://i.namu.wiki/i/bgZy70qoscq_PpQ8W3oWB_EZ6epg8SC3kSRkovWboXlSikxzuJl3ubMdh5Gb4Gm_s14vgTaHw0-bYvl9LwG-wpiwb9kSlZRBC9QZfMQe4e6jDWEac_XTx9lRfAjIc8aaQ66BZcTXj3Ro2D6n-SHXKw.webp'  />
              <Text $align='start' $margin='7px 0 0' $size={12}>영웅</Text>
            </Div>
          </Div>


        </Slider>
      </Div>
    </Div>
  )
}

export default Carousel;