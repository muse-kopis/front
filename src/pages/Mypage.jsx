import React from "react";
import { Div } from "../components/common/div";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Profile from "../components/pages/mypage/Profile";
import Links from "../components/pages/mypage/Links";
import { useAuth } from "../hooks/AuthHooks";

const Mypage = () => {
  const { 
    username, 
    userTier, 
    handleLogout, 
  } = useAuth();
  return (
    <>
      <Header />
      <Div $flex={true} $padding='10px 40px' $direction='column'>
        <Profile 
          username={username}
          userTier={userTier}
        />
        <Links 
          logout={handleLogout}
        />
      </Div>
      <Navigation />
    </>
  ) 
}

export default Mypage;