import { useNavigate } from "react-router-dom"
import { getOAuthKakaoApi, getUserInfoApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { login, setToken } from "../store/slices/userSlice";

export const useAuth = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOAuthKakao = async (code) => {
    try {
      const response = await getOAuthKakaoApi(code);
      const token = response.data.token; // 응답 데이터
      dispatch(setToken(token));
      const userData = await getUserInfoApi();
      const userInfo = { ...userData.data, token };
      dispatch(login(userInfo));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleOAuthKakao,
  }
}