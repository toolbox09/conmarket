import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { NaverLoginState } from '@repo/react';


export function NaverCallback() {

    const location = useLocation();
    useEffect(()=>{
        const params = new URLSearchParams(location.hash);
        const accessToken =  params.get("#access_token") 
        if (window.opener && accessToken ) {
            const state : NaverLoginState = {
                state : true,
                accessToken : accessToken,
            }
            window.opener.postMessage( JSON.stringify(state) , window.location.origin);
            window.close();
          }

    },[])

    return null;
}