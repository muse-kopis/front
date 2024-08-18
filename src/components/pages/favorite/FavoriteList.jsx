import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY5 } from "../../../constants/color";

const Poster = styled.img`
  border-radius: 5px;
  width: 52px;
  height: 67px;
`;

const FavoriteList = () => {
  return(
    <Div $padding='12px 18px' $flex={true} $direction='column' $align='start' $gap='14px'>
      <Div $flex={true}>
        <Poster 
          src="https://i.namu.wiki/i/d0j_4R6eZ_ca-kbP9vcpnp-8gZ8exx2j4zG07UecDnnQmNQNGdBBp9nHhj50DtiS4XHdX_aqlpYTvio82b_IAKA4NnviWFCk9aKdMu7ok2BJSDW4iBxQp9F8DddvG4vExKTflCjUhCnqAU7X4d4ZL10yoou-3a5eHjGfNMEsG-A.webp" 
          alt="placeholder" 
        />
        <Div $flex={true} $padding='0 11px' $align='start' $gap='4px' $direction='column'>
          <Text $weight='SEMIBOLD' $align='start'>영웅</Text>
          <Text $size={12} $color={GRAY5}>ACOM</Text>
        </Div>
      </Div>
      <Div $flex={true}>
        <Poster 
          src="https://i.namu.wiki/i/d0j_4R6eZ_ca-kbP9vcpnp-8gZ8exx2j4zG07UecDnnQmNQNGdBBp9nHhj50DtiS4XHdX_aqlpYTvio82b_IAKA4NnviWFCk9aKdMu7ok2BJSDW4iBxQp9F8DddvG4vExKTflCjUhCnqAU7X4d4ZL10yoou-3a5eHjGfNMEsG-A.webp" 
          alt="placeholder" 
        />
        <Div $flex={true} $padding='0 11px' $align='start' $gap='4px' $direction='column'>
          <Text $weight='SEMIBOLD' $align='start'>영웅</Text>
          <Text $size={12} $color={GRAY5}>ACOM</Text>
        </Div>
      </Div>
      <Div $flex={true}>
        <Poster 
          src="https://i.namu.wiki/i/d0j_4R6eZ_ca-kbP9vcpnp-8gZ8exx2j4zG07UecDnnQmNQNGdBBp9nHhj50DtiS4XHdX_aqlpYTvio82b_IAKA4NnviWFCk9aKdMu7ok2BJSDW4iBxQp9F8DddvG4vExKTflCjUhCnqAU7X4d4ZL10yoou-3a5eHjGfNMEsG-A.webp" 
          alt="placeholder" 
        />
        <Div $flex={true} $padding='0 11px' $align='start' $gap='4px' $direction='column'>
          <Text $weight='SEMIBOLD' $align='start'>영웅</Text>
          <Text $size={12} $color={GRAY5}>ACOM</Text>
        </Div>
      </Div>
    </Div>
  )
}

export default FavoriteList;