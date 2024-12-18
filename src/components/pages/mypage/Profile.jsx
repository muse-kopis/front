import React from 'react';
import { Div, Text } from '../../common/div';
import { Rank1Icon, Rank2Icon, Rank3Icon, NicknameEditIcon } from '../../../assets/icons';

const Profile = ({ username, userTier, handleShowNicknameEdit }) => {
  return (
    <Div $flex={true} $direction='column' $margin='32px 0'>
      {userTier === 'NEWBIE' ? 
        <Rank3Icon />
      : userTier === 'AMATEUR' ? 
        <Rank2Icon />
      : <Rank1Icon />
      }
      <Div $flex={true} $gap='6px' $margin='16px 0 4px'>
        <Text $size={14} $weight='BOLD'>
          {username}
        </Text>
        <NicknameEditIcon
          onClick={handleShowNicknameEdit}
          style={{
            marginTop: '2px',
            cursor: 'pointer'
          }}
        />
      </Div>
    </Div>
  )
}

export default Profile;