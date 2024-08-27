import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY5 } from "../../../constants/color";
import { usePerformance } from "../../../hooks/PerformanceHooks";

const Poster = styled.img`
  border-radius: 5px;
  width: 52px;
  height: 67px;
`;

const FavoriteList = ({ datas = [] }) => {
  const { handleGoDetail } = usePerformance();
  return(
    <Div $margin='47px 0 0' $padding='12px 18px' $flex={true} $width='100%' $direction='column' $align='start' $gap='14px'>
      {datas.map((data, index) => (
        <Div 
          key={index} 
          $cursor={true}
          $flex={true} 
          $width='100%'
          onClick={() => handleGoDetail(data.id)}
        >
          <Poster
            src={data.poster}
            alt="poster"
          />
          <Div $flex={true} $padding='0 11px' $grow='0' $width='calc(100% - 54px)' $align='start' $gap='4px' $direction='column'>
            <Text $weight='SEMIBOLD' $align='start'>
              {data.performanceName}
            </Text>
            <Text $size={12} $align='start' $color={GRAY5}>
              {data.entertainment}
            </Text>
          </Div>
        </Div>
      ))}
    </Div>
  )
}

export default FavoriteList;