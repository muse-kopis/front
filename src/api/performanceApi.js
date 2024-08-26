import { post, get } from './base';
import { PERFORMANCE_URL } from '../constants/api';

export const getNowPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.state, {params: {state: '공연중'}});
  return response;
};

export const getPopularPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.popular);
  return response;
};

export const getRecommendPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.recommend);
  return response;
};

export const getRandomPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.random);
  return response;
};

export const getDetailPerformanceApi = async (performanceId) => {
  const response = await get(PERFORMANCE_URL.detail(performanceId));
  return response;
};
