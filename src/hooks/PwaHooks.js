import { useCallback, useEffect, useState } from "react";
import { useSpring } from '@react-spring/web';

const usePwa = () => {
  const [isShow, setIsShow] = useState(false);
  const [isPwa, setIsPwa] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    console.log('deferredPrompt', deferredPrompt);
  }, [deferredPrompt]);

  // PWA 상태 체크
  const checkPwaMode = useCallback(() => {
    // 브라우저에서 실행 중인지 확인
    const isBrowser = window.matchMedia('(display-mode: browser)').matches;
    
    // PWA 모드로 실행 중인지 확인
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isMinimalUi = window.matchMedia('(display-mode: minimal-ui)').matches;
    const isWindowControls = window.matchMedia('(display-mode: window-controls-overlay)').matches;

    // PWA 실행 여부 확인
    const isPwaLaunched = window.location.search.includes('launchedfrom=homescreen');
    const isIosStandalone = window.navigator.standalone;

    // 브라우저로 실행 중이면 false, PWA로 실행 중일 때만 true
    const isPwaMode = !isBrowser && (
      isStandalone || 
      isMinimalUi || 
      isWindowControls || 
      isPwaLaunched || 
      isIosStandalone
    );

    // 디버깅용 로그
    console.log('PWA Check:', {
      isBrowser,
      displayModes: {
        standalone: isStandalone,
        minimalUi: isMinimalUi,
        windowControls: isWindowControls
      },
      isPwaLaunched,
      isIosStandalone,
      isPwaMode,
      currentUrl: window.location.href
    });

    setIsPwa(isPwaMode);
  }, []);

  // PWA 설치 프롬프트 이벤트 핸들러
  const handleBeforeInstallPrompt = useCallback((e) => {
    e.preventDefault();  // 브라우저 기본 설치 배너 방지
    setDeferredPrompt(e);  // 설치 프롬프트 저장
  }, []);

  useEffect(() => {
    checkPwaMode();

    // PWA 설치 프롬프트 이벤트 핸들러 등록
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    // 이벤트 핸들러 해제
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [checkPwaMode, handleBeforeInstallPrompt]);

  // 설치 핸들러 추가
  const handleInstall = async () => {
    if (!deferredPrompt) return;
      
    deferredPrompt.prompt();  // 저장된 프롬프트 표시
    const result = await deferredPrompt.userChoice;
    
    if (result.outcome === 'accepted') {
      console.log('PWA 설치가 완료되었습니다.');
    }
      
    setDeferredPrompt(null);  // 프롬프트는 한 번만 사용 가능
    handleClose();  // 설치 후 bottom sheet 닫기
  };

  const bottomSheetAnimation = useSpring({
    transform: isShow ? 'translateY(0%)' : 'translateY(100%)',
    opacity: isShow ? 1 : 0,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const handleClose = () => {
    setIsShow(false);
  };

  return {
    isSafari,
    isIOS,
    isPwa,
    isInstallable: !!deferredPrompt,
    isShow,
    bottomSheetAnimation,
    setIsShow,
    handleClose,
    handleInstall,
  };
}

export default usePwa;