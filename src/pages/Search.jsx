import React, { useState } from "react";
import { Div } from "../components/common/div";
import SearchBar from "../components/pages/search/SearchBar";
import SearchResult from "../components/pages/search/SearchResult";
import Popular from "../components/pages/search/Popular";
import Navigation from "../components/common/Navigation";
import { usePerformance } from "../hooks/PerformanceHooks";

const Search = () => {
  const { 
    popularPerformances,
    handleGoDetail,
  } = usePerformance();
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
          <Popular
            data={popularPerformances}
            goDetail={handleGoDetail}
          />
        )}
      </Div>
      <Navigation />
    </>
  ) 
}

export default Search;