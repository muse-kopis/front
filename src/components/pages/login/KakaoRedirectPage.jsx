import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthHooks';

const KakaoRedirectPage = () => {
  const location = useLocation();
  const { handleOAuthKakao } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if (code) {
      handleOAuthKakao(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
    </div>
  );
};

export default KakaoRedirectPage;