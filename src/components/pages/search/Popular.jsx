import React from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY4 } from "../../../constants/color";

const Poster = styled.img`
  height: 150px;
`;

const Popular = () => {
  return(
    <Div $flex={true} $direction='column' $padding='18px 0' $align='start'>
      <Text $size={12} $weight='SEMIBOLD' $color={GRAY4} $align='start'>실시간 인기 작품</Text>
      <Div $flex={true} $justify='space-between' $padding='10px 0' $gap='16px' $wrap={true} $width='100%'>
        <Div $direction='column' $align='start'>
          <Poster 
            src="https://i.namu.wiki/i/wWf_gvAGbtYPSicZAksRKhEJpQ7Uon-VpBiZkNRxLWwCsqWhCuWVKMHQjQ3bw1_Lco2APb9nh3mJUufZUfXJFGBaqrM4xtMcXCg9Q8Bbq7-ZhMYf_9QsSa82IkH_perN5uAtHMFUzGPtsqJLvP-mzQ.webp"
            alt="poster"
          />
          <Text $size={12} $weight='MEDOUM' $align='start'>작품명</Text>
        </Div>
      </Div>
    </Div>
  )
}

export default Popular;
