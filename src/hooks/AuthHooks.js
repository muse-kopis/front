import { useNavigate } from "react-router-dom"
import { getOAuthKakaoApi, getUserInfoApi } from "../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { login, setToken, logout } from "../store/slices/userSlice";

export const useAuth = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, userTier } = useSelector((state) => state.user.value);

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

  return {
    username,
    userTier,
    handleOAuthKakao,
    handleLogout,
  }
}