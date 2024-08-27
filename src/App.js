import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Div } from "./components/common/div";
import { Main, Detail, Favorite, Search, CreateBook, TicketBook, TicketBookDetail, Mypage, Login } from "./pages";
import KakaoRedirectPage from "./components/pages/login/KakaoRedirectPage";
import { PrivateRoute } from "./components/auth/PrivateRoute";

const App = () => {
  return(
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $overflow='auto'>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/ticket" element={<TicketBook />} />
            <Route path="/book-detail/:ticketBookId" element={<TicketBookDetail />} />
            <Route path="/create-book/:performanceId" element={<CreateBook />} />
          </Route>
          <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Div>
    </BrowserRouter>
  )
}

export default App;
