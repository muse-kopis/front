import { useNavigate } from "react-router-dom"

export const useAuth = () =>{
  const navigate = useNavigate();

  console.log('useAuth');
  const handleLogin = () => {
    navigate('/oauth/redirected/kakao');
  }

  return {
    handleLogin,
  }
}