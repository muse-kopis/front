import React from "react";
import styled from "styled-components";
import { Div } from "../../common/div";
import { GRAY1, GRAY4 } from "../../../constants/color";
import { SearchBarIcon } from "../../../assets/icons";

const SearchInput = styled.input`
  font-size: 16px;
  border: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    color: ${GRAY4};
  }
`;  

const SearchBar = ({ setSearchVal, handleSearch }) => {
  return (
    <Div $backgroundColor={GRAY1} $radius='8px' $height='40px' $flex={true} $justify='start' $padding='0 15px' $gap='10px'>
      <SearchInput 
        type="search"
        name='performance-search' 
        placeholder="작품명을 입력하세요" 
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <SearchBarIcon
        onClick={handleSearch}
        style={{ cursor: 'pointer' }}
      />
    </Div>
  )
}

export default SearchBar;