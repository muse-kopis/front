import { get } from './base';
import { REVIEW_URL } from '../constants/api';

export const getPublicReviewApi = async (performanceId) => {
  const response = await get(REVIEW_URL.public(performanceId));
  return response;
};

export const getPrivateReviewApi = async (performanceId) => {
  const response = await get(REVIEW_URL.private(performanceId));
  return response;
};