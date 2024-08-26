import styled from "styled-components";
import { Div } from "../components/common/div";
import { API_BASE } from "../api/base";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const Login = () => {
  const handleLogin = () => {
    window.location.href = API_BASE + '/oauth/kakao';
  }

  return (
    <Div>
      <Button onClick={handleLogin}>
        <img src="/assets/kakao_login_medium_wide.png" alt="button" />
      </Button>
    </Div>
  )
}

export default Login;