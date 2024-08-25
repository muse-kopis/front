import React from "react";
import styled from "styled-components";
import { Div } from "../../common/div";
import { GRAY1, GRAY3, NAVY, WHITE } from "../../../constants/color";

const ToggleButton = styled.button`
  height: 32px;
  flex-grow: 1;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: ${GRAY3};
  ${({ $toggle }) => $toggle && `
    background-color: ${NAVY};
    color: ${WHITE};
  `}
`;

const Toggle = ({ isBook, setIsBook }) => {

  return (
    <Div $flex={true} $backgroundColor={GRAY1} $height='40px' $radius='50px' $justify='space-between' $padding='0 4px'>
      <ToggleButton $toggle={isBook} onClick={() => setIsBook(true)}>
        티켓북
      </ToggleButton>
      <ToggleButton $toggle={!isBook} onClick={() => setIsBook(false)}>
        포토캘린더
      </ToggleButton>
    </Div>
  )
}

export default Toggle;