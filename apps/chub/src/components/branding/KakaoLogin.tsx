import { useEffect } from 'react';
import { Button, ButtonProps , IconMessageCircleFilled } from '@repo/ui';

declare global {
  interface Window {
    Kakao: any; // Kakao 객체에 대한 타입 정의
  }
}

export interface KakaoLoginProps extends ButtonProps {
    label : string;
    onSuccess? : ( accessToken : string ) => void;
}


export function KakaoLogin( { label, onSuccess, ...props } : KakaoLoginProps  ) {
    // Kakao SDK 초기화
    useEffect(() => {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init( import.meta.env.VITE_KAKAO_JDK_KEY );
          kakao.isInitialized();
        }
      }
    }, []);
  
  
    // 카카오 로그인 핸들러
    const handleKakaoLogin = () => {
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
  
    return (
        <Button onClick={handleKakaoLogin} variant='filled' color='#FEE500' c={'#000'}  leftSection={<IconMessageCircleFilled/>} {...props}  >
          {label}
        </Button>
    );
  }