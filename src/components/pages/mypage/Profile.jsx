import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../assets/icons/ProfileImage.png';
import { GRAY4 } from '../../../constants/color';
import { Div, Text } from '../../common/div';
import { Rank1Icon, Rank2Icon, Rank3Icon } from '../../../assets/icons';

const ProfileImg = styled.div`
  width: 84px;
  height: 84px;
`;

const Profile = () => {
  return (
    <Div $flex={true} $direction='column' $margin='32px 0'>
      <Rank1Icon />
      <Text $margin='16px 0 4px' $size={14}  $weight='BOLD'>
        사용자이름
      </Text>
    </Div>
  )
}

export default Profile;