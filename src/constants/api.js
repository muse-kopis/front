
export const PERFORMANCE_URL = {
  onboarding: '/performances/onboarding',
  detail: (performanceId) => `/performances/${performanceId}`,
  state: '/performances/state',
  random: '/performances/random',
  recommend: '/performances/recommend',
  popular: '/performances/popular',
  like: (performanceId) => `/performances/${performanceId}/like`,
  myLike: '/performances/like',
}

export const REVIEW_URL = {
  review: '/reviews',
  public: (performanceId) => `/reviews/public/${performanceId}`,
  private: (performanceId) => `/reviews/private/${performanceId}`,
}

export const AUTH_URL = {
  kakao: '/oauth/login/kakao',
  userInfo: '/oauth/mypage',
}