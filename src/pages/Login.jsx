import styled from "styled-components";
import { Div } from "../components/common/div";
import { useAuth } from "../hooks/AuthHooks";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const Login = () => {
  const { handleLogin } = useAuth();

  return (
    <Div>
      <Button onClick={handleLogin}>
        <img src="/assets/kakao_login_medium_wide.png" alt="button" />
      </Button>
    </Div>
  )
}

export default Login;