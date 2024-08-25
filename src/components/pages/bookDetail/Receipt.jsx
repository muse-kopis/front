import React from "react";
import styled from "styled-components";
import { ReceiptSmallImage } from "../../../assets/ticketbook";
import { Div, Text } from "../../common/div";
import { StarSmallIcon, EmptyStarSmallIcon } from "../../../assets/icons";

const Container = styled.div`
  position: absolute;
  top: 78px;
  right: 17px;
  background-image: url(${ReceiptSmallImage});
  background-size: cover;
  background-position: center;
  width: 125px;
  height: 210px;
`;

const StarRate = styled(StarSmallIcon)`
  width: 8px;
  height: 8px;
  margin-right: 1px;
`;

const EmptStarRate = styled(EmptyStarSmallIcon)`
  width: 8px;
  height: 8px;
  margin-right: 1px;
`;

const Receipt = () => {
  return (
    <Container>
      <Div $flex={true} $direction='column' $gap='1.6px' $align='start' style={{ position: 'absolute', top: '38px', left: '24px'}}>
        <Text $size={3.5} $align='start'>
          2024. 08. 24
        </Text>
        <Text $size={3.5} $align='start'>
          제목제목
        </Text>
        <Text $size={3.5} $align='start'>
          시어터
        </Text>
        <Text $size={3.5} $align='start'>
          출연진1 ..
        </Text>
      </Div>
      <Text $width='84px' $height='50px' $size={3.5} $align='start' $whiteSpace='wrap' style={{position: 'absolute', top: '74px', left: '12px'}}>
        너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 그래서 너무너무 좋았따.너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다.  너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 너무너무 좋았다. 
      </Text>
      <Div style={{ position: 'absolute', bottom: '66px', left: '32px'}}>
        <StarRate />
        <StarRate />
        <StarRate />
        <StarRate />
        <EmptStarRate />
      </Div>
    </Container>
  )
}

export default Receipt;