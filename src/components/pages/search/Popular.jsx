import React from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY4 } from "../../../constants/color";

const Poster = styled.img`
  height: 132px;
  width: 100%;
`;

const Popular = ({ data, goDetail }) => {
  const handleClick = (performanceId) => {
    goDetail(performanceId);
  }
  return(
    <Div $flex={true} $direction='column' $padding='26px 0' $align='start'>
      <Text $size={12} $weight='SEMIBOLD' $color={GRAY4} $align='start'>실시간 인기 작품</Text>
      <Div $flex={true} $justify='space-between' $padding='10px 0' $gap='16px' $wrap={true} $width='100%'>
        {data && data.map((performance, index) => (
          <Div 
            $width='calc((100% - 32px) / 3)'
            $direction='column' 
            $align='start' 
            $cursor={true}
            $grow='0'
            key={index} 
            onClick={() => handleClick(performance.id)}
          >
            <Poster 
              src={performance.poster}
              alt="poster"
            />
            <Text $size={12} $weight='MEDOUM' $align='start'>
              {performance.performanceName}
            </Text>
          </Div>
        ))}
      </Div>
    </Div>
  )
}

export default Popular;
