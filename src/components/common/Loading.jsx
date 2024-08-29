import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../assets/LoadingAnimation.json'
import styled from 'styled-components';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const LottieContainer = styled.div`
  display: flex;
  margin-top: 96px;
`;

const Loading = () => {
  return (
    <LottieContainer>
      <Lottie 
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={120}
        width={120}
      />
    </LottieContainer>
    );
}

export default Loading;