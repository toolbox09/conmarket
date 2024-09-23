import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any; // Kakao 객체에 대한 타입 정의
  }
}
interface UseKakaoLoginProps {
  url : string;
  onSuccess? : ( accessToken : string ) => void;
}

export function useKakaoLogin( { url, onSuccess } : UseKakaoLoginProps ) {
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init( url );
        kakao.isInitialized();
      }
    }
  }, []);

  const login = () => {
    window.Kakao.Auth.login({
      success: (authObj: any) => {
          if(onSuccess && authObj.access_token ) {
              onSuccess(authObj.access_token);
          }  
      },
      fail: (err: any) => {
        console.error(err);
      },
    });
  };

  return {
    login,
  }
}