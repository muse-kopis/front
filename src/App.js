import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Div } from "./components/common/div";
import { Main, Detail, Favorite, Search, CreateBook, TicketBook, TicketBookDetail, Mypage, Login, Onboarding, SharedBook, SharedTicketBookDetail } from "./pages";
import KakaoRedirectPage from "./components/pages/login/KakaoRedirectPage";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import { StyledToastConatiner } from "./components/common/Toast"
import { PwaGuide } from "./components/common/PwaGuide";

const App = () => {
  return(
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $overflow='auto'>
        <StyledToastConatiner limit={1} />
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
          <Route path="/shared-book-detail/:ticketBookId" element={<SharedTicketBookDetail />} />
          <Route path="/ticketBooks/share/:id" element={<SharedBook />} />
          <Route path="/onboarding" element={<Onboarding />}></Route>
          <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <PwaGuide />
      </Div>
    </BrowserRouter>
  )
}

export default App;
