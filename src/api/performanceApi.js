import { post, get, del, getBlob } from './base';
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

export const getPerformanceLikedApi = async (performanceId) => {
  const response = await get(PERFORMANCE_URL.like(performanceId));
  return response;
};

export const postLikePerformanceApi = async (performanceApi) => {
  const response = await post(PERFORMANCE_URL.like(performanceApi));
  return response;
};

export const deleteLikePerformanceApi = async (performanceId) => {
  const response = await del(PERFORMANCE_URL.like(performanceId));
  return response;
};

export const getMyLikePerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.myLike);
  return response;
};

export const getPosterApi = async (performanceId) => {
  const response = await getBlob(PERFORMANCE_URL.poster(performanceId));
  return response;
}