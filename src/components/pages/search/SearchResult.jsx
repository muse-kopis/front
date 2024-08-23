import React from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY5 } from "../../../constants/color";

const Poster = styled.img`
  width: 54px;
  height: 67px;
  border-radius: 5px;
`;

const SearchResult = ({ result = [] }) => {
  return (
    <>
    {result.length === 0 ? (
      <Text $margin='180px 0 0' $color={GRAY5} $size={16} $align='center' $width='100%'>
        검색된 공연이 없어요
      </Text>
      ) : (
        <Div $flex={true} $direction='column' $padding='2px 0' $align='start'>
          <Div $flex={true} $margin='16px 0 0'>
            <Poster
              src="https://i.namu.wiki/i/wWf_gvAGbtYPSicZAksRKhEJpQ7Uon-VpBiZkNRxLWwCsqWhCuWVKMHQjQ3bw1_Lco2APb9nh3mJUufZUfXJFGBaqrM4xtMcXCg9Q8Bbq7-ZhMYf_9QsSa82IkH_perN5uAtHMFUzGPtsqJLvP-mzQ.webp"
              alt="poster"
            />
            <Div $padding='0 12px'>
              <Text $size={14} $weight='SEMIBOLD' $align='start'>영웅</Text>
              <Text $size={12} $algin='start' $margin='4px 0 0'>신시컴퍼니</Text>
            </Div>
          </Div>
        </Div> 
      )}
    </>
  )
}

export default SearchResult;