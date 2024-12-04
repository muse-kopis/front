import { SafariShareIconIcon, SafariAddHomeIcon } from '../assets/icons';

export const MOBILE_SIZE = '420px';

export const FONT_WEIGHT = {
  LIGHT: {fontWeight: 400},
  MEDIUM: {fontWeight: 500},
  SEMIBOLD: {fontWeight: 500},
  BOLD: {fontWeight: 600},
}

export const CURATION_FEED = {
  curation1: {
    title: '님의 취향에 딱 맞는 작품이에요'
  },
  curation2: {
    title: '지금 공연 중인 작품이에요 🎵'
  },
  curation3: {
    title: '여름에 보기 좋은 시원하고 재밌는 작품이에요 🌊'
  },
}

export const URL = {
  HOME: '/',
  SEARCH: '/search',
  TICKET: '/ticket',
  MYPAGE: '/mypage',
  NOT_FOUND: '*',
}

export const PWA_GUIDE = {
  safari_ios: [
    {
      text: <span>하단 <b style={{color: '#06c'}}>공유</b> 버튼을 눌러주세요</span>,
      icon: <SafariShareIconIcon />,
    },
    {
      text: <span><b style={{color: '#06c'}}>홈 화면에 추가</b> 버튼을 선택해주세요</span>,
      icon: <SafariAddHomeIcon />,
    },
    {
      text: <span><b style={{color: '#06c'}}>추가</b> 버튼을 눌러 설치를 완료해주세요</span>,
      icon: <span style={{color: '#06c'}}>추가</span>,
    }
  ],
  safari_desktop: <span><b>chrome</b> 브라우저에서 접속해주세요</span>,
  ios_other: <span><b>Safari</b> 브라우저에서 접속해주세요</span>,
}
