import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../assets/icons/ProfileImage.png';
import { GRAY4 } from '../../../constants/color';
import { Div, Text } from '../../common/div';

const ProfileImg = styled.img`
  width: 84px;
  height: 84px;
`;

const Profile = () => {
  return (
    <Div $flex={true} $direction='column'>
      <ProfileImg src={ProfileImage} />
      <Text $margin='20px 0 4px'>
        사용자이름
      </Text>
      <Text $size={12} $color={GRAY4}>
        temp@gmail.com
      </Text>
    </Div>
  )
}

export default Profile;