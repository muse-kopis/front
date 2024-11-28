import { get } from './base';
import { AUTH_URL } from '../constants/api';

export const getOAuthKakaoApi = async (code) => {
  const response = await get(AUTH_URL.kakao, {params: {code}});
  return response;
};

export const getUserInfoApi = async () => {
  const response = await get(AUTH_URL.userInfo);
  return response;
};