import React from "react";
import { Div } from "../components/common/div";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Profile from "../components/pages/mypage/Profile";
import Links from "../components/pages/mypage/Links";
import { NicknameEditModal }from "../components/modal/NicknmaeEdiModal";
import { useAuth } from "../hooks/AuthHooks";

const Mypage = () => {
  const { 
    username, 
    userTier, 
    isShowNicknameEdit,
    nickname,
    nicknameDisabled,
    setNickname,
    handleLogout, 
    handleShowNicknameEdit,
    handleNicknameEdit,
    handleCloseNicknameEdit,
  } = useAuth();
  return (
    <>
      <Header />
      <Div $flex={true} $padding='10px 40px' $direction='column'>
        <Profile 
          username={username}
          userTier={userTier}
          handleShowNicknameEdit={handleShowNicknameEdit}
        />
        <Links 
          logout={handleLogout}
        />
      </Div>
      <NicknameEditModal 
        isOpen={isShowNicknameEdit}
        closeModal={handleCloseNicknameEdit}
        handleNicknameEdit={handleNicknameEdit}
        nickname={nickname}
        setNickname={setNickname}
        nicknameDisabled={nicknameDisabled}
      />
      <Navigation />
    </>
  ) 
}

export default Mypage;