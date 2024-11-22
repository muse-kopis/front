import React from 'react';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { DimDiv, Text, Div, Button } from './div';
import usePwa from '../../hooks/PwaHooks';

const PwaButton = styled.button`
  position: fixed;
  bottom: 90px;
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
  display: flex;
  flex-direction: column;
`;

const InstallButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

export const PwaGuide = () => {
  const { 
    isPwa,
    isInstallable,
    isShow, 
    bottomSheetAnimation, 
    setIsShow,
    handleClose,
    handleInstall
  } = usePwa();

  if (!isPwa) return null;  // PWA로 실행 중이면 컴포넌트를 렌더링하지 않음

  return (
    <>
      <PwaButton onClick={() => setIsShow(true)} />
      {isShow && <DimDiv onClick={handleClose} />}
      <BottomSheetContainer style={bottomSheetAnimation}>
        <Div $flex={true} $grow={0} $justify='space-between' $maxWidth='auto'>
          <Text $weight='BOLD'>앱 설치하기</Text>
          <Text 
            onClick={handleClose}
            style={{ cursor: 'pointer'}} 
          >
            닫기
          </Text>
        </Div>
        {isInstallable && (
          <Div $flex={true} $maxWidth='auto' $direction='column' $justify='center' $margin='30px 0 0 0' $align='center'>
          <Text>앱으로 설치하면 더 빨리 접속할 수 있어요.</Text>
            <InstallButton onClick={handleInstall}>
              설치하기
            </InstallButton>
          </Div>
        )}
      </BottomSheetContainer>
    </>
  );
};
