import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { DimDiv, Text, Div } from './div';

const Button = styled.button`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  background: url('/musee_logo.png') center center / cover;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(80, 80, 80, 0.15);
`;

const BottomSheetContainer = styled(animated.div)`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  width: 100%;
  height: 300px;
  left: 0;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 20px;
`;

export const PwaGuide = () => {
  const [isShow, setIsShow] = useState(false);

  const bottomSheetAnimation = useSpring({
    transform: isShow ? 'translateY(0%)' : 'translateY(100%)',
    opacity: isShow ? 1 : 0,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <Button onClick={() => setIsShow(true)} />
      {isShow && <DimDiv onClick={handleClose} />}
      <BottomSheetContainer style={bottomSheetAnimation}>
        <Div $flex={true} $justify='space-between' $maxWidth='auto'>
          <Text $weight='BOLD'>앱 설치하기</Text>
          <Text 
            onClick={handleClose}
            style={{ cursor: 'pointer'}} 
          >
            닫기
          </Text>
        </Div>
      </BottomSheetContainer>
    </>
  );
};
