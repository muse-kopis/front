import { ToastContainer, toast } from "react-toastify";
import { GRAY5, WHITE } from "../../constants/color";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const StyledToastConatiner = styled(ToastContainer)`
  width: calc(100% - 48px);
  max-width: 380px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 104px;
  padding: 0;

  .Toastify__toast {
    border-radius: 6px;
    min-height: 40px;
    margin: 0;
    padding: 10px 24px;
  }

  .Toastify__toast-body {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Pretendard";
    font-size: 12px;
    padding: 0;
  }

  .Toastify__toast--info {
    background-color: ${GRAY5};
    color: ${WHITE};
  }

  .Toastify__toast--info * {
    color: ${WHITE};
  }
`;

const defaultToastOption = {
  position: "bottom-center",
  icon: false,
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const ToastMessage = {
  info: (message, options = {}) => {
    toast.info(message, { ...defaultToastOption, ...options });
  },
};
