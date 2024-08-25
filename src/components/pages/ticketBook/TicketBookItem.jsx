import React, { useEffect } from "react";
import styled from "styled-components";
import EmptyTicketBookList from "./EmptyTicketBookList";
import { Div, Text } from "../../common/div";
import useColorThief from 'use-color-thief';
import { GRAY2 } from "../../../constants/color";

const Poster = styled.img`
  height: 100%;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 1px solid white;
  border-right: 2px solid ${GRAY2};
`;

const TicketBookItem = () => {
  const source = 'https://seeandyougo.com/api/images/d66061d5-6acb-4c0c-a67e-262e22e65e622024-05-31T16-53-58776381.png';

  const { color } = useColorThief(source, {
    format: 'hex',
    colorCount: 10,
    quality: 10,
  });

  return (
    <Div $height='230px' $flex={true} $direction='column' $justify='space-between' $grow='0' style={{ width: 'calc((100% - 16px) / 2)'}}>
      <Div $height='200px' $flex={true} $grow='0' >
        <Div $backgroundColor={color} $width='10px' $height='100%' $grow='0' style={{ borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
        <Poster src={source} alt='티켓북 이미지' style={{ height: '100%', width: 'calc(100% - 11px)'}} />
      </Div>
      <Text $size={12} $weight='MEDIUM'>젠틀맨스가이드</Text>
    </Div>
  )
}

export default TicketBookItem;