import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailHeader from '../components/pages/detail/DetailHeader';
import DetailTab from '../components/pages/detail/DetailTab';
import { Text, Div } from '../components/common/div';
import { useDetail } from '../hooks/DetailHooks';
import Info from '../components/pages/detail/Info';
import Review from '../components/pages/detail/Review';
import { useLocation } from 'react-router-dom';
import { getDetailPerformanceApi } from '../api/performanceApi';

const Poster = styled.img`
  width: 165px;
  height: 224px;
`;

const Detail = () => {
  const { setLike } = useDetail();
  const id = useLocation().state.performanceId;
  const [tab, setTab] = useState('info');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetail = async (performanceId) => {
      const response = await getDetailPerformanceApi(performanceId);
      setData(response.data);
    };
    fetchDetail(id);
  }, [id])


  return (
    <>
      <DetailHeader />
      <Div $flex={true} $direction='column' $margin='10px 0 0'>
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
            setLike={setLike} 
          /> 
          : <Review id={id} />
        }
      </Div>
    </>
  )
}

export default Detail;