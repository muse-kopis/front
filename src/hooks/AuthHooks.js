import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { getOAuthKakaoApi, getUserInfoApi, patchUserNicknameApi } from "../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { login, setToken, logout, setName } from "../store/slices/userSlice";
import { ToastMessage } from "../components/common/Toast"; 

export const useAuth = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, userTier } = useSelector((state) => state.user.value);
  const [isShowNicknameEdit, setIsShowNicknameEdit] = useState(false);
  const [nickname, setNickname] = useState(username);
  const nicknameDisabled = nickname === username;

  const handleOAuthKakao = async (code) => {
    try {
      const response = await getOAuthKakaoApi(code);
      const token = response.data.token;
      const isNewUser = response.data.isNewUser;
      dispatch(setToken(token));
      const userData = await getUserInfoApi();
      const userInfo = { ...userData.data, token };
      dispatch(login(userInfo));
      if (isNewUser) {
        navigate("/onboarding");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleShowNicknameEdit = () => {
    setIsShowNicknameEdit(true);
  }

  const handleCloseNicknameEdit = () => {
    setIsShowNicknameEdit(false);
    setNickname(username);
  }

  const handleNicknameEdit = async () => {
    try {
      const response = await patchUserNicknameApi(nickname);
      if (response.status === 200) {
        dispatch(setName(nickname));
        handleCloseNicknameEdit();
        ToastMessage.info('닉네임이 변경되었습니다.');
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    username,
    userTier,
    isShowNicknameEdit,
    nickname,
    nicknameDisabled,
    setNickname,
    handleOAuthKakao,
    handleLogout,
    handleShowNicknameEdit,
    handleNicknameEdit,
    handleCloseNicknameEdit,
  }
}