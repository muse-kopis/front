import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Div } from "./components/common/div";
import { GRAY3 } from "./constants/color";
import { Main, Detail, Favorite, Search, CreateBook } from "./pages";

const App = () => {
  return(
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $border={`1px solid ${GRAY3}`} $overflow='auto'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:performanceId" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create-book/:performanceId" element={<CreateBook />} />
        </Routes>
      </Div>
    </BrowserRouter>
  )
}

export default App;
