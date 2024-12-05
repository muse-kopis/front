import React from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY5 } from "../../../constants/color";

const Poster = styled.img`
  width: 54px;
  height: 67px;
  border-radius: 5px;
`;

const SearchResult = ({ result, goDetail }) => {
  return (
    <Div $margin='0 0 50px'>
    {result.length === 0 ? (
      <Text $margin='180px 0 0' $color={GRAY5} $size={16} $align='center' $width='100%'>
        검색된 공연이 없어요
      </Text>
      ) : (
        <Div $flex={true} $direction='column' $padding='2px 0' $width='100%' $align='start' $cursor={true}>
          {result.map((item, index) => (
            <Div 
              $flex={true} 
              $margin='16px 0 0' 
              $justify='start'
              $width='100%'
              key={index}
              onClick={() => goDetail(item.id)}
            >
              <Poster
                src={item.poster}
                alt="poster"
                loading="lazy"
              />
              <Div $padding='0 12px' $grow='0' $width='calc(100% - 54px)'>
                <Text $size={14} $weight='SEMIBOLD' $align='start'>
                  {item.performanceName}
                </Text>
                <Text $size={12} $align='start' $margin='4px 0 0'>
                  {item.entertainment}
                </Text>
              </Div>
            </Div>
          ))}
        </Div> 
      )}
    </Div>
  )
}

export default SearchResult;