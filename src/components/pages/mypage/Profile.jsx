import React from 'react';
import { Div, Text } from '../../common/div';
import { Rank1Icon, Rank2Icon, Rank3Icon } from '../../../assets/icons';

const Profile = ({ userName, userTier }) => {
  return (
    <Div $flex={true} $direction='column' $margin='32px 0'>
      {userTier === 'NEWBIE' ? 
        <Rank3Icon />
      : userTier === 'AMATEUR' ? 
        <Rank2Icon />
      : <Rank1Icon />
      }
      <Text $margin='16px 0 4px' $size={14}  $weight='BOLD'>
        {userName}
      </Text>
    </Div>
  )
}

export default Profile;