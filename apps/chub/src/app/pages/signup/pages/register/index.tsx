import { Flex, Button, Anchor, Text, Title, IconMessageCircleFilled } from '@repo/ui';
import { IconMail } from '@repo/ui';
import { FormPage, FormBox } from '@/components';
import { useNavigateQuery, useKakaoLogin, useNaverLogin } from '@repo/react';


function Register() {
    const navigate = useNavigateQuery();
    const kakao = useKakaoLogin({
      url : import.meta.env.VITE_KAKAO_JDK_KEY,
      onSuccess : ( value ) => {
        navigate('./memberSocial', { signupType : 'kakao' } );
      }
    });

    const naver = useNaverLogin({
      url : import.meta.env.VITE_NAVER_JDK_KEY,
      callbackUrl : 'https://localhost:5175/callback/naver',
      onSuccess : ( value ) => {
        navigate('./memberSocial',{ signupType : 'naver' } );
      }
    })
    return (
    <FormPage >
        <FormBox title='회원가입' >
          <Button onClick={()=>naver.login()} variant='filled' color='#03C75A' leftSection={<Title order={4} >N</Title>} >네이버 계정으로 계속하기</Button>
          <Button onClick={()=>kakao.login()} variant='filled' color='#FEE500' c={'#000'}  leftSection={<IconMessageCircleFilled/>}>카카오 계정으로 계속하기</Button>
          <Button onClick={()=>navigate('./memberId')} leftSection={<IconMail size={24} />} w={'100%'} size={'md'} variant='outline' color='dark.3' >이메일 계정으로 계속하기</Button>
          <Flex justify={'space-between'} mx={'100px'} >
              <Text>이미 계정이 있나요?</Text>
              <Anchor onClick={()=>navigate('/signin')} target="_blank" underline="always" style={{ color : 'black' }} >로그인</Anchor>
          </Flex>
        </FormBox>
    </FormPage>
    )
}

export default Register;