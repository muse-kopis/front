
export const PERFORMANCE_URL = {
  onboarding: '/performances/onboarding',
  detail: (performanceId) => `/performances/${performanceId}`,
  state: '/performances/state',
  random: '/performances/random',
  recommend: '/performances/recommend',
  popular: '/performances/popular',
}

export const AUTH_URL = {
  kakao: '/oauth/login/kakao',
  userInfo: '/oauth/mypage',
}