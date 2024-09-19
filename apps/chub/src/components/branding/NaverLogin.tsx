import { Button, ButtonProps, Title } from '@repo/ui';
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

export interface NaverLoginProps extends ButtonProps {
    label : string;
    onSuccess? : ( accessToken : string ) => void;
}

export function NaverLogin( { label, onSuccess, ...props } : NaverLoginProps ) {

    useEffect(() => {
      const { naver } = window;
  
      // 네이버 로그인 초기화
      const naverLogin = new naver.LoginWithNaverId({
        clientId: import.meta.env.VITE_NAVER_JDK_KEY ,
        callbackUrl: 'https://localhost:5175/callback/naver',
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
    }, []);
  
    // 사용자 정보를 백엔드로 전달하는 함수
    const handleLogin = () => {
        const doc = document.getElementById('naverIdLogin_loginButton');
        if(doc) {
            doc.click();
        } 
      };
  
    return (
      <>
        <Button onClick={handleLogin} variant='filled' color='#03C75A' leftSection={<Title order={4} >N</Title>} {...props}  >{ label }</Button>
        <div id="naverIdLogin" style={{ display : 'none' }}  ></div>
      </>
    ); 
  }