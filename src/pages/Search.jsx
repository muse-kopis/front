import React, { useState } from "react";
import { Div } from "../components/common/div";
import SearchBar from "../components/pages/search/SearchBar";
import SearchResult from "../components/pages/search/SearchResult";
import Popular from "../components/pages/search/Popular";
import Navigation from "../components/common/Navigation";

const Search = () => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <>
      <Div $padding='20px 18px'>
        <SearchBar 
          setSearchVal={setSearchVal}
        />
        {searchVal !== '' ? (
          <SearchResult searchVal={searchVal} />
        ) : (
          <Popular />
        )}
      </Div>
      <Navigation />
    </>
  ) 
}

export default Search;