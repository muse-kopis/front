import { useCallback, useEffect, useState } from "react";
import { useSpring } from '@react-spring/web';

const usePwa = () => {
  const [isShow, setIsShow] = useState(false);
  const [isPwa, setIsPwa] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // PWA 상태 체크
  const checkPwaMode = useCallback(() => {
    const isPwaMode = 
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches ||
      window.matchMedia('(display-mode: minimal-ui)').matches ||
      window.navigator.standalone ||
      document.referrer.includes('android-app://') ||
      window.location.search.includes('launchedfrom=homescreen');
    
    setIsPwa(isPwaMode);
  }, []);

  // PWA 설치 프롬프트 이벤트 핸들러
  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();  // 브라우저 기본 설치 배너 방지
    setDeferredPrompt(e);  // 설치 프롬프트 저장
  };

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