import { createChubApi } from './api';
import { SocialType } from '@/entities';

export interface GetMeKakaoResponse {
  id : string;
  kakaoAccount : {
    email : string;
  },
  properties : {
    profileImage : string;
    thumbnailImage : string;
  }
}

export async function getMeKakao( accessToken : string ) {
  const api = createChubApi();
  const res = await api.get( '/oauth/me/kakao', {
    params : {
      accessToken : accessToken
    }
  });

  return res.status === 200 ? res.data as GetMeKakaoResponse : null;
}


export interface GetMeNaverResponse {
  email : string;
  id : string;
  name : string;
}

export async function getMeNaver( accessToken : string ) {
  const api = createChubApi();
  const res = await api.get( '/oauth/me/naver', {
    params : {
      accessToken : accessToken
    }
  });

  return res.status === 200 ? res.data as GetMeNaverResponse : null;
}





export async  function existsSocial( socialType : SocialType, socialId : string ) {
  const api = createChubApi();
  const res = await api.get( '/oauth/exists/social', {
    params : {
      socialType : socialType,
      socialId : socialId,
    }
  });
  return res.status === 200 ? res.data as boolean : null;
}