import React from "react";
import { GRAY0, GRAY4 } from "../../../constants/color";
import { Div, Text } from "../../common/div";
import { LikeIcon } from "../../../assets/icons";
import styled from "styled-components";

const Title = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${GRAY4};
  width: 50px;
  text-align: start;
  min-width: 50px;
`;

const Info = ({ isLiked, setLike, data }) => {
  return (
    <>
      <LikeIcon isLiked={isLiked} setLike={setLike} />
      <Div $width='100%' $flex={true} $direction='column'>
        <Div $width='100%' $flex={true} $backgroundColor={GRAY0} $direction='column' $gap='8px' $padding='13px 18px'>
          <Div $width='100%' $flex={true} $justify='start' $gap='20px'>
            <Title>공연 기간</Title>
            <Text $size={12}>
              {data?.startDate} ~ {data?.endDate}
            </Text>
          </Div>
          <Div $width='100%' $flex={true} $justify='start' $gap='20px'>
            <Title>공연장</Title>
            <Text $size={12}>
              {data?.venue}
            </Text>
          </Div>
          <Div $width='100%' $flex={true} $justify='start' $gap='20px'>
            <Title>러닝 타임</Title>
            <Text $size={12}>
            {data?.performanceTime}
            </Text>
          </Div>
          <Div $width='100%' $flex={true} $justify='start' $gap='20px'>
            <Title>관람 연령</Title>
            <Text $size={12}>
              {data?.limitAge}
            </Text>
          </Div>
        </Div>
        <Div $width='100%' $flex={true} $direction='column' $gap='8px' $padding='13px 18px' $align='start'>
          <Text $size={12} $align='start' $weight='BOLD'>
            출연자
          </Text>
          <Div $flex={true} $justify='start' $gap='8px 15px' $wrap={true} $maxWidth='180px'>
            {data?.castMembers.map((cast, index) => (
              <Text $size={12} key={index}>
                {cast.name}
              </Text>
            ))}
          </Div>
        </Div>
        <Div $width='100%' $flex={true} $direction='column' $gap='8px' $padding='13px 18px' $align='start'>
          <Text $size={12} $align='start' $weight='BOLD'>
            제작사
          </Text>
          <Text $size={12} $align='start'>
            {data?.entertainment}
          </Text>
        </Div>
      </Div>
    </>
  )
}

export default Info;