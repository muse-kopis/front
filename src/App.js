import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Div } from "./components/common/div";
import { GRAY3 } from "./constants/color";
import Main from "./pages/Main";

const App = () => {
  return(
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $radius='0' $border={`1px solid ${GRAY3}`}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Div>
    </BrowserRouter>
  )
}

export default App;
