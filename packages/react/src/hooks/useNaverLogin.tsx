import { useEffect } from 'react';

declare global {
    interface Window {
      naver: any;
    }
}
export interface NaverLoginState {
    state : boolean;
    accessToken : string;
}

export interface UseNaverLoginProps {
  url : string;
  callbackUrl : string;
  onSuccess? : ( accessToken : string ) => void;
}

export function useNaverLogin( { url, callbackUrl, onSuccess } : UseNaverLoginProps ) {
  useEffect(() => {


    const naverLoginDiv = document.createElement('div');
    naverLoginDiv.id = 'naverIdLogin';
    naverLoginDiv.style.display = 'none';
    document.body.appendChild(naverLoginDiv);

    const { naver } = window;

    // 네이버 로그인 초기화
    const naverLogin = new naver.LoginWithNaverId({
      clientId: url,
      callbackUrl: callbackUrl,
      isPopup: true,
      callbackHandle: true,
      loginButton: { color: 'green', type: 3, height: 50 },
    });

    naverLogin.init();

    window.addEventListener('message', (event) => {
      if (event.origin !== window.location.origin) return;
      if( typeof event.data !== 'string' ) return;

      const state = JSON.parse(event.data) as NaverLoginState;
      if( state && state.state && state.accessToken ) {
          if(onSuccess) {
              onSuccess(state.accessToken);
          }
      }
    });

    return () => {
      document.body.removeChild(naverLoginDiv);
    };
  }, []);

  const login = () => {
    const doc = document.getElementById('naverIdLogin_loginButton');
    if(doc) {
        doc.click();
    } 
  };

  return {
    login
  }
}