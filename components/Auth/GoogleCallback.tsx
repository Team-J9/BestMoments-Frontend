'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { fetchOAuthTokens } from '@/lib/api/auth';

/**
 * todo
 * 콜백 페이지 로딩 디자인 필요
 * 에러 메시지에 대한 팝업 혹은 모달 필요
 */
const GoogleCallback = ({ provider }: { provider: string }) => {
  const router = useRouter();
  const isFetchingRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOAuthCallback = async (code: string, state: string) => {
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;

      try {
        const data = await fetchOAuthTokens(provider, code, state);
        console.log(data);
      } catch (error: any) {
        console.error(error);
        setError(error.message || '요청에 실패하였습니다. 잠시후 다시 시도해주세요.');
        isFetchingRef.current = false;
      } finally {
        setLoading(false);
        isFetchingRef.current = false;
      }
    };

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      if (code && state) {
        handleOAuthCallback(code, state);
      } else {
        setLoading(false);
        setError('값이 올바르지 않습니다.');
      }
    }
  }, [provider, router]);

  if (loading) {
    return <div>요청중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>GoogleCallback</div>;
};

export default GoogleCallback;
