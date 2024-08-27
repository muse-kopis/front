import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTicketBookDetailApi } from '../api/ticketBookApi';
import { getPosterApi } from '../api/performanceApi';
import useColorThief from 'use-color-thief';

export const useTicketBookDetail = () => {
  const id = useParams().ticketBookId;
  const [data, setData] = useState(null);
  const [performanceId, setPerformanceId] = useState(null);
  const [posterImage, setPosterImage] = useState('#111');
  const [modal, setModal] = useState({
    image: false,
    ticket: false,
    receipt: false,
  });

  const { color } = useColorThief(posterImage, {
    format: 'hex',
    colorCount: 10,
    quality: 10,
  });

  const getTicketBookDetail = async (ticketBookId) => {
    try {
      const response = await getTicketBookDetailApi(ticketBookId);
      setPerformanceId(response.data.performanceId);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching ticket book detail:", error);
    }
  };

  const fetchPosterImage = async () => {
    try {
      const response = await getPosterApi(performanceId);
      if (response.status === 200) {
        const blob = response.data;
        const imageUrl = URL.createObjectURL(blob);
        setPosterImage(imageUrl);
      } else {
        console.error("Failed to fetch image:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  useEffect(() => {
    getTicketBookDetail(id);
  }, [id]);

  useEffect(() => {
    if (performanceId) {
      fetchPosterImage();
    }
    // eslint-disable-next-line
  }, [performanceId]);

  return {
    modal, 
    setModal,
    data, 
    color,
  };
}