import React, { useState } from 'react';
import styled from 'styled-components';
import DetailHeader from '../components/pages/detail/DetailHeader';
import DetailTab from '../components/pages/detail/DetailTab';
import { Text, Div } from '../components/common/div';
import { useDetail } from '../hooks/DetailHooks';
import Info from '../components/pages/detail/Info';
import Review from '../components/pages/detail/Review';

const Poster = styled.img`
  width: 165px;
  height: 224px;
`;

const Detail = () => {
  const { 
    id,
    data, 
    isLiked, 
    reviews,
    handleSetLike, 
  } = useDetail();
  const [tab, setTab] = useState('info');

  return (
    <>
      <DetailHeader id={id} />
      <Div $flex={true} $direction='column' $margin='57px 0 0'>
        <Poster 
          src={data?.poster}
        />
        <Text $size={17} $weight='SEMIBOLD' $margin='12px 0 10px 0'>
          {data?.performanceName}
        </Text>
        <DetailTab type={tab} setTab={setTab} />
        {tab === 'info' ? 
          <Info 
            data={data}
            setLike={handleSetLike} 
            isLiked={isLiked}
          /> 
          : 
            <Review 
              id={id}
              datas={reviews}
            />
        }
      </Div>
    </>
  )
}

export default Detail;