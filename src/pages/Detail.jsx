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
  const { setLike } = useDetail();

  const [tab, setTab] = useState('info');
  return (
    <>
      <DetailHeader />
      <Div $flex={true} $direction='column' $margin='10px 0 0' className='dffdfdf'>
        <Poster src='https://i.namu.wiki/i/d0j_4R6eZ_ca-kbP9vcpnp-8gZ8exx2j4zG07UecDnnQmNQNGdBBp9nHhj50DtiS4XHdX_aqlpYTvio82b_IAKA4NnviWFCk9aKdMu7ok2BJSDW4iBxQp9F8DddvG4vExKTflCjUhCnqAU7X4d4ZL10yoou-3a5eHjGfNMEsG-A.webp' />
        <Text $size={17} $weight='SEMIBOLD' $margin='12px 0 10px 0'>시카고</Text>
        <DetailTab type={tab} setTab={setTab} />
        {tab === 'info' ? 
          <Info setLike={setLike} /> 
          : <Review />
        }
      </Div>
    </>
  )
}

export default Detail;