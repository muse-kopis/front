import styled from "styled-components"
import { GRAY1, DIM } from "../../constants/color";

const Modal = styled.div`
  z-index: 10;
  ${({ $isOpen }) => $isOpen ? `
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 390px;
    height: 100vh;
    background-color: ${GRAY1};
    display: flex;
    align-items: center;
    flex-direction: column;
  `
    : `display: none;`
  }
  ${({ $dim }) => $dim ? `
    background-color: ${DIM};
    width: 100vw;
  ` : ''}
`;

export default Modal;