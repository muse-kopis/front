import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY2 } from "../../../constants/color";
import useColorThief from "use-color-thief";

const Container = styled(Div)`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;
  width: calc((100% - 16px) / 2);
  cursor: pointer;
`;

const Poster = styled.img`
  height: 100%;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 1px solid white;
  border-right: 2px solid ${GRAY2};
`;

const TicketBookItem = ({ data, goDetail, getPosterColor }) => {
  const imgRef = useRef(null);

  return (
    <Container onClick={() => goDetail(data?.id)}>
      <Div $height='200px' $flex={true} $grow='0' >
      <Div 
          $backgroundColor={getPosterColor(data.performanceId)}
          $width='10px' 
          $height='100%' 
          $grow='0' 
          style={{ borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} 
        />
        <Poster 
          src={data?.poster} 
          alt="티켓북 이미지" 
          ref={imgRef} 
          style={{ height: "100%", width: "calc(100% - 11px)" }} 
        />
      </Div>
      <Text $size={12} $weight='MEDIUM'>
        {data?.performanceName}
      </Text>
    </Container>
  )
}

export default TicketBookItem;