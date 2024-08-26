import React from 'react';
import styled from 'styled-components';
import { PolaroidImage, EmptyPolariodImage } from '../../../assets/ticketbook';

const Container = styled.div`
  height: 148px;
  width: 118px;
  position: absolute;
  left: 42px;
  top: 86px;
`;

const PolaroidFrame = styled.div`
  background-image: url(${PolaroidImage});
  width: 100px;
  height: 122px;
  display: flex;
  justify-content: center;
  position: absolute;
  &:last-of-type {
    right: 0;
    bottom: 0;
  }
`;

const PolaroidInner = styled.img`
  border-radius: 0;
  width: 80px;
  height: 92px;
  margin-top: 9px;
`;

const Polaroid = () => {
  return (
    <Container>
      <PolaroidFrame>
        <PolaroidInner 
          src={EmptyPolariodImage} 
          alt='폴라로이드 이미지' 
        />
      </PolaroidFrame>
      <PolaroidFrame>
        <PolaroidInner 
          src={EmptyPolariodImage} 
          alt='폴라로이드 이미지' 
        />
      </PolaroidFrame>
    </Container>
  )
}

export default Polaroid;