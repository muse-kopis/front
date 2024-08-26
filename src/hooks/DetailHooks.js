import { useEffect, useState } from 'react';
import { getDetailPerformanceApi, getPerformanceLikedApi, deleteLikePerformanceApi, postLikePerformanceApi } from '../api/performanceApi';
import { getPublicReviewApi } from '../api/reviewApi';
import { useLocation } from 'react-router-dom';

export const useDetail = () => {
  const id = useLocation().state.performanceId;
  const [isLiked, setIsLiked] = useState(false);
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleSetLike = () => {
    if (isLiked) {
      deleteLikePerformanceApi(id);
    } else {
      postLikePerformanceApi(id);
    }
    setIsLiked(!isLiked);
  }

  const fetchDetail = async (performanceId) => {
    const response = await getDetailPerformanceApi(performanceId);
    setData(response.data);
  };

  const fetchIsLiked = async (performanceId) => {
    const response = await getPerformanceLikedApi(performanceId);
    setIsLiked(response.data);
  };

  const fetchReviews = async (performanceId) => {
    const response = await getPublicReviewApi(performanceId);
    setReviews(response.data);
  };

  useEffect(() => {
    fetchDetail(id);
    fetchIsLiked(id);
    fetchReviews(id);
  }, [id]);

  return {
    id,
    isLiked,
    reviews,
    data,
    handleSetLike,
    fetchDetail,
    fetchIsLiked,
  }
}